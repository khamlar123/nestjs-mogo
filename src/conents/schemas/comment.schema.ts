import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Like, LikeSchema } from "./like.schema";

export type ComentDocument = Coments & Document;

@Schema()
export class Coments {
    @Prop()
    uId: string;
    @Prop()
    comment: string;
    @Prop({default: new Date().toISOString()})
    createdAt: string;
    @Prop()
    updatedAt: string;
}

export const ComentsSchema = SchemaFactory.createForClass(Coments);