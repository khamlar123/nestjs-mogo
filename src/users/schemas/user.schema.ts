import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';


export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;
    @Prop()
    userName: string;
    @Prop()
    password: string;
    @Prop()
    status: number; //0 not active, 1 active, 2 ban
    @Prop({ default: new Date().toISOString() })
    createdAt: string;
    @Prop()
    updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);