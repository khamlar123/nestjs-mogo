import { MongooseModule } from '@nestjs/mongoose';
import { RoleService } from './role.service';
import { Module } from '@nestjs/common';
import { Role, RoleSchema } from './schemas/role.schema';
import { RoleController } from './role.controller';
import { RoleRepository } from './role.repository';

@Module({
    imports: [MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema}])],
    controllers: [RoleController],
    providers: [
        RoleService,
        RoleRepository
    ],
})
export class RoleModule { }
