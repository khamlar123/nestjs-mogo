import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Conents , ConentsSchema } from "./schemas/conent.schema";
import { ConentsController } from "./conents.controller";
import { ConentsRepository } from "./conents.repository";
import { ConentsService } from "./conents.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Conents.name, schema:  ConentsSchema}])],
    controllers: [ConentsController],
    providers: [ConentsService, ConentsRepository,]
})
export class ConentsModule {}