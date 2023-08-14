import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import { Role } from "src/role/schemas/role.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    userId: string;

    @Prop({type: Types.ObjectId, ref: 'role'})
    role: Types.ObjectId | Role

    @Prop()
    email: string;

    @Prop()
    age: number;

    @Prop([String])
    favoriteFoods: string[]
}

export const UserSchema = SchemaFactory.createForClass(User);