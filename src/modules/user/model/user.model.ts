import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  contact: string;

  @Prop({ required: true })
  password: string;

  @Prop([String])
  socialMediaLinks: string[];

  @Prop()
  qrCode: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  userAvatar: string;
}

export type UserDocumentT = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
