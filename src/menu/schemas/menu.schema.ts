import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
    @Prop()
    name: string;
    @Prop()
    refId: number;
    @Prop({default: new Date().toISOString()})
    createdAt: string;
    @Prop()
    updatedAt: string;
}

export const MueSchema = SchemaFactory.createForClass(Menu);