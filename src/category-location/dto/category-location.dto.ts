import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCategoryLocationDto {
    @IsNumber()
    @IsNotEmpty()
    locationId: number;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}