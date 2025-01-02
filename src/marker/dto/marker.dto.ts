import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMarkerDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    locationId: number;
}