import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto'; //import a "folder"
@Controller('auth')
export class AuthController {
  //auth service is automatically created when initializing the controller
  constructor(private authService: AuthService) { }
  @Post('register') //register a new user
  register(@Body() registerDTO: RegisterDTO) {
    //not validate using class-validator AND class-transformer
    return this.authService.register(registerDTO);
  }
  //POST: .../auth/login
  @Post('login')
  login(@Body() LoginDTO: LoginDTO) {
    return this.authService.login(LoginDTO);
  }
}
//export = "make public"
