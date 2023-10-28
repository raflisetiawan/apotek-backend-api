import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { TransformPasswordPipe } from './transform-password.pipe';
import { Request } from 'express';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  /**
   * Constructor
   * @param authService
   */
  constructor(private authService: AuthService) {}

  /**
   * Register controller
   * @param dto
   * @returns
   */
  @UsePipes(ValidationPipe, TransformPasswordPipe)
  @HttpCode(200)
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return await this.authService.register(dto);
  }

  /**
   * Login Controller
   * @param dto
   * @returns
   */
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  /**
   * Get detail User
   */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Req() request: Request) {
    // Modify the method to accept Request
    const user = request.user; // Access user information from the Request object

    // You can now return the user details
    return {
      message: 'Profile',
      user: user, // You can include additional user details here
    };
  }
  @Post('refresh-token')
  async refreshAccessToken(@Body() dto: RefreshTokenDto) {
    return await this.authService.refreshAccessToken(dto.refreshToken);
  }
}
