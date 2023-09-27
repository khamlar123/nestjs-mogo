import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type LikeDocument = Like & Document;

@Schema()
export class Like {
    @Prop()
    uId: string;
    @Prop({ required: false,default: 'Like' })
    refStatus?: 'Like' | 'Love' | 'Lol' | 'Sad';
    @Prop({ default: new Date().toISOString()})
    createdAt: string;
}

export const LikeSchema = SchemaFactory.createForClass(Like);