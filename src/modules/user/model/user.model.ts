import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ unique: true, type: String })
  email: string;

  @Prop({ type: String })
  contact: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop([String])
  socialMediaLinks: string[];

  @Prop({ type: String })
  qrCode: string;

  @Prop({ default: Date.now, type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;

  @Prop({ type: String })
  userAvatar: string;
}

export type UserDocumentT = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
