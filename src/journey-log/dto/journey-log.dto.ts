import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateJourneyLogDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsNotEmpty()
    locationId: number;
}