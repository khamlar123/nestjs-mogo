import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { UsersService } from "./users.service";
import { Role, RoleSchema } from "src/role/schemas/role.schema";
import { RoleRepository } from "src/role/role.repository";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Role.name, schema: RoleSchema}])],
    controllers: [UsersController],
    providers: [UsersService, UsersRepository, RoleRepository]
})
export class UsersModule {}