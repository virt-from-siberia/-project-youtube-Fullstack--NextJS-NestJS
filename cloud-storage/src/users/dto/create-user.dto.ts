import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
  @ApiProperty({
    default: "alonso85@mail.ru"
  })
  email: string;

  @ApiProperty({
    default: "Aleksey"
  })
  fullname: string;

  @ApiProperty({
    default: "test"
  })
  password: string;
}
