import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Role, RoleDocument } from "./schemas/role.schema";
import { Model, FilterQuery } from 'mongoose';

@Injectable()
export class RoleRepository {
    constructor(@InjectModel(Role.name) private roleModule: Model<RoleDocument>) {}
 

    async findOne(roleFilterQuery: FilterQuery<Role>): Promise<Role> {
        return this.roleModule.findOne(roleFilterQuery);
    }

    async find(roleFilterQuery: FilterQuery<Role>): Promise<Role[]> {
        return this.roleModule.find(roleFilterQuery)
    }

    async create(user: Role): Promise<Role> {
        const newUser = new this.roleModule(user);
        return newUser.save()
    }

    async findOneAndUpdate(roleFilterQuery: FilterQuery<Role>, user: Partial<Role>): Promise<Role> {
        return this.roleModule.findOneAndUpdate(roleFilterQuery, user, { new: true });
    }

    async findByIdAndRemove(id: string): Promise<Role>{        
        return this.roleModule.findByIdAndDelete(id).exec();
    }

}