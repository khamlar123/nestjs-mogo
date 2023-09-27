import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import { Coments, ComentsSchema } from "./comment.schema";
import { Like, LikeSchema } from "./like.schema";

export type ConentsDocument = Conents & Document;

@Schema()
export class Conents {
    @Prop()
    title: string;
    @Prop()
    conent: string;
    @Prop({ type: [ComentsSchema], ref: "Coments" })
    coments: Coments[]
    @Prop({ type: [LikeSchema], ref: 'Likes'})
    like: Like[]
    @Prop({default: new Date().toISOString()})
    createdAt: string;
    @Prop()
    updatedAt: string;
}

export const ConentsSchema = SchemaFactory.createForClass(Conents);