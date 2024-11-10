import { forwardRef, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SALT } from 'src/contants';
import { UserService } from '../user/user.service';
import { UserDocumentT } from '../user/model/user.model';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}
  async getHashedPassword(pass: string): Promise<any> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(pass, SALT, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
  }

  async validateUserEmail(email: string): Promise<UserDocumentT> {
    const user = await this.userService.findOne(email);
    return user;
  }
}
