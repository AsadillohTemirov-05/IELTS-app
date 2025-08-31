import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

// 🔹 UserDocument tipini yangiladik, matchPassword metodini qo‘shdik
export type UserDocument = User & Document & {
  matchPassword(password: string): Promise<boolean>;
};

@Schema()
export class User {
  @Prop({ type: String, required: true })
  _id: string; // Explicitly define _id

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ default: false })
  agreeTerms: boolean;

  @Prop({ required: true })
  password: string;
}

// 🔹 Schema yaratish
export const UserSchema = SchemaFactory.createForClass(User);

// 🔹 matchPassword metodini schema.methods ga qo‘shish
UserSchema.methods.matchPassword = async function (
  enteredPassword: string,
): Promise<boolean> {
  return bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre<UserDocument>('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
