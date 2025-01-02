import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDTO, LoginDTO } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable({}) //this is "Dependency Injection"
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) { }
  async register(registerDTO: RegisterDTO) {
    //generate password to hashedPassword
    const hashedPassword = await argon.hash(registerDTO.password);
    try {
      //insert data to database
      const user = await this.prismaService.user.create({
        data: {
          email: registerDTO.email,
          hashedPassword: hashedPassword,
          fullName: registerDTO.fullName,
          address: registerDTO.address,
          language: registerDTO.language,
          dob: registerDTO.dob,
          avatar: registerDTO.avatar,
        },
        //only select id, email, createdAt
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });
      return await this.signJwtToken(user.id, user.email);
    } catch (error) {
      if (error.code == 'P2002') {
        //throw new ForbiddenException(error.message)
        //for simple
        throw new ForbiddenException('User with this email already exists');
      }
    }
    //you should add constraint "unique" to user table
  }
  async login(loginDTO: LoginDTO) {
    //find user with input email
    const user = await this.prismaService.user.findUnique({
      where: {
        email: loginDTO.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('User not found');
    }
    const passwordMatched = await argon.verify(
      user.hashedPassword,
      loginDTO.password,
    );
    if (!passwordMatched) {
      throw new ForbiddenException('Incorrect password');
    }
    delete user.hashedPassword; //remove 1 field in the object
    return await this.signJwtToken(user.id, user.email);
  }
  //now convert to an object, not string
  async signJwtToken(
    userId: number,
    email: string,
  ): Promise<{ accessToken: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const jwtString = await this.jwtService.signAsync(payload, {
      expiresIn: '100m',
      secret: this.configService.get('JWT_SECRET'),
    });
    return {
      accessToken: jwtString,
    };
  }
}
