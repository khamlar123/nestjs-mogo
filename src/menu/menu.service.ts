import { Injectable } from "@nestjs/common";
import { Menu } from "./schemas/menu.schema";
import { MenuRepository } from "./menu.repository";
import { CreateMenuDto } from "./dto/create-menu.dto";
import { UpdateMenuDto } from "./dto/update-menu.dto";


@Injectable()
export class MenuService {
    constructor(
        private readonly menuRepository: MenuRepository
    ) {}

    async getUserById(id: string): Promise<Menu> {
        return await this.menuRepository.findOne({ _id: id })
    }

    async getUsers(): Promise<Menu[]> {
        return await this.menuRepository.find({});
    }

    async createUser(model: CreateMenuDto): Promise<any> {
        const addItem = await this.menuRepository.create(model)
        return addItem;
    }

    async updateUser(id: string, updatesItem: UpdateMenuDto): Promise<Menu> {
        return await this.menuRepository.findOneAndUpdate({_id:id}, updatesItem);
    }

    async remove(id: string): Promise<Menu> {     
        return await this.menuRepository.findByIdAndRemove(id);
    }
}