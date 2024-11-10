import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocumentT } from './model/user.model';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocumentT>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async createUser(user: any): Promise<any> {
    console.log('Creating user...');
    const hashedPassword = await this.authService.getHashedPassword(
      user.password,
    );
    user.password = hashedPassword;
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOne(email: string): Promise<any> {
    const query = { email };
    return this.userModel.findOne(query);
  }
}
