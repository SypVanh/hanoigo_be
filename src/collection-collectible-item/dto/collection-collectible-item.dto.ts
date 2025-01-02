import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCollectionCollectibleItemDto {
    @IsNumber()
    @IsNotEmpty()
    collectionId: number;

    @IsNumber()
    @IsNotEmpty()
    collectibleItemId: number;
}