import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import { Coments } from "./comment.schema";

export type ConentsDocument = Conents & Document;

@Schema()
export class Conents {
    @Prop()
    title: string;
    @Prop()
    conent: string;
    @Prop({ type: [{
                uId:String,
                comment:String,
                comentDate:String,
                comentUpdate:String
            }] })
    coments: Coments[]
    @Prop()
    createdAt: string;
    @Prop()
    updatedAt: string;
}

export const ConentsSchema = SchemaFactory.createForClass(Conents);