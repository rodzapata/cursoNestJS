import { IsBoolean, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"

export class CreateTaskDto {
    @IsNumber()
    id: number

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description: string

    @IsBoolean()
    state: boolean
}
