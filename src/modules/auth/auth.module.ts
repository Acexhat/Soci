import { forwardRef, Module } from '@nestjs/common';
// import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'JWT_SECRET',
      signOptions: { expiresIn: '99999s' },
    }),
    forwardRef(() => UserModule),
    // PassportModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
