import { Controller, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Request() req): Promise<any> {
    const userToCreate = req.body;
    try {
      this.userService.createUser(userToCreate);
    } catch (err) {
      console.log('Error creating user : ', err);
    }
  }
}
