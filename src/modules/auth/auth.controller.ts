import { Controller, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { decrpytPassword } from 'src/utils/decryptPassword';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async validateUser(@Request() req): Promise<any> {
    try {
      const { email, password } = req.body;
      if (!email) {
        return 'Email is missing';
      }
      const userData = await this.authService.validateUserEmail(email);
      if (!userData) {
        return 'Wrong email/password encountered';
      }

      // Check if user inputted password is matching or not
      const isMatched = await decrpytPassword(userData.password, password);
      if (!isMatched) {
        return {
          status: 431,
          code: 431,
          message: "Password doesn't matched!",
          request: {
            url: req.url,
            method: req.method,
          },
        };
      }
      return {
        status: 200,
        code: 200,
        message: '',
        data: userData,
        request: {
          url: req.url,
          method: req.method,
        },
      };
    } catch (err) {
      console.log('Error while loggin in...', err);
    }
  }
}
