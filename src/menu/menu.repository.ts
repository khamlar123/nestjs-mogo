import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Menu, MenuDocument } from "./schemas/menu.schema";
import { CreateMenuDto } from "./dto/create-menu.dto";

@Injectable()
export class MenuRepository {
    constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

    async findOne(filterQuery: FilterQuery<Menu>): Promise<Menu> {
        return this.menuModel.findOne(filterQuery);
    }

    async find(filterQuery: FilterQuery<Menu>): Promise<Menu[]> {
        return this.menuModel.find(filterQuery)
    }

    async create(model: CreateMenuDto): Promise<Menu> {
        const newUser = new this.menuModel(model);
        return newUser.save()
    }

    async findOneAndUpdate(filterQuery: FilterQuery<Menu>, user: Partial<Menu>): Promise<Menu> {
        return this.menuModel.findOneAndUpdate(filterQuery, user, { new: true });
    }

    async findByIdAndRemove(id: string): Promise<Menu>{        
        return this.menuModel.findByIdAndDelete(id).exec();
    }
} 