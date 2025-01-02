import { IsNotEmpty, IsString } from "class-validator";

export class CreateCollectibleItemDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}