import { Injectable } from "@nestjs/common";
import { Menu } from "./schemas/menu.schema";
import { MenuRepository } from "./menu.repository";


@Injectable()
export class MenuService {
    constructor(
        private readonly menuRepository: MenuRepository
    ) {}

    async getUserById(id: string): Promise<Menu> {
        return await this.menuRepository.findOne({ id })
    }

    async getUsers(): Promise<Menu[]> {
        return await this.menuRepository.find({});
    }

    async createUser(model): Promise<any> {
        const mapData = {
            name: model.name,
            refId: model.refId,
        }
        const addItem = await this.menuRepository.create(mapData)
        return addItem;
    }

    async updateUser(id: string, updatesItem): Promise<Menu> {
        return await this.menuRepository.findOneAndUpdate({id}, updatesItem);
    }

    async remove(id: string): Promise<Menu> {     
        return await this.menuRepository.findByIdAndRemove(id);
    }
}