import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Menu, MueSchema } from "./schemas/menu.schema";
import { MenuController } from "./menu.controller";
import { MenuRepository } from "./menu.repository";
import { MenuService } from "./menu.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Menu.name, schema:  MueSchema}])],
    controllers: [MenuController],
    providers: [MenuService, MenuRepository,]
})
export class MenueModule {}