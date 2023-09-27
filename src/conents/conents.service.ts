import { Injectable } from "@nestjs/common";
import { Conents } from "./schemas/conent.schema";
import { ConentsRepository } from "./conents.repository";
import { UpdateConentDto } from "./dto/update-conent.dto";
import { CreateConentDto } from "./dto/create-conent.dto";


@Injectable()
export class ConentsService {
    constructor(
        private readonly conentsRepository: ConentsRepository
    ) {}

    async findById(id: string): Promise<Conents> {
        return await this.conentsRepository.findOne({ id })
    }

    async filterItem(): Promise<Conents[]> {
        return await this.conentsRepository.find({});
    }

    async createItem(model: CreateConentDto): Promise<any> {
        const mapData = {
            title: model.title,
            conent: model.conent,
            coments: [],
            like: [],
            createdAt: new Date().toISOString(),
            updatedAt: "",
        }
        const addItem = await this.conentsRepository.create(mapData)
        return addItem;
    }

    async updateItem(id: string, updatesItem): Promise<Conents> {        
        return await this.conentsRepository.findOneAndUpdate({_id: id}, updatesItem);
    }

    async remove(id: string): Promise<Conents> {     
        return await this.conentsRepository.findByIdAndRemove(id);
    }

    async comment(id, model): Promise<Conents> {
        return await this.conentsRepository.comment( {_id: id }, model )
    }

    async deleteComent(id, cid): Promise<any> {
        return await this.conentsRepository.deleteComent( {_id: id }, cid );
    }

    async like(model: {id: string, uId: string, refStatus: string}): Promise<any> {
        return await this.conentsRepository.like({_id: model.id}, model)
    }
}