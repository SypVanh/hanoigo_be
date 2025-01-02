import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserTaskDto {
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    taskId: number;
}