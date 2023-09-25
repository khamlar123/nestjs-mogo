import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ComentDocument = Coments & Document;

@Schema()
export class Coments {
    @Prop()
    uId: string;
    @Prop()
    comment: string;
    @Prop()
    comentDate: string;
    @Prop()
    comentUpdate: string;
}

export const ComentsSchema = SchemaFactory.createForClass(Coments);