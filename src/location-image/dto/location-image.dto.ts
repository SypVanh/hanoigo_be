import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLocationImageDto {
    @IsString()
    @IsNotEmpty()
    url: string;

    @IsNumber()
    @IsNotEmpty()
    locationId: number;
}