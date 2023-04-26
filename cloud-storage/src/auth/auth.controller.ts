import { Controller, UseGuards, Post, Request, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBody } from "@nestjs/swagger";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";


@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }

  @UseGuards(AuthGuard("local"))
  @Post("/login")
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req) {
    // console.log('req ==> ', req)
    console.log('req.user ==> ', req.user)
    return req.user;
  }

  @Post("/register")
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }
}
