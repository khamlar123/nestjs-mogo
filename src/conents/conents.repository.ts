import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Conents, ConentsDocument } from "./schemas/conent.schema";
import { ComentDto } from "./dto/coment.dto";

@Injectable()
export class ConentsRepository {
    constructor(@InjectModel(Conents.name) private conentsModel: Model<ConentsDocument>) {}

    async findOne(filterQuery: FilterQuery<Conents>): Promise<Conents> {
        return this.conentsModel.findOne(filterQuery);
    }

    async find(filterQuery: FilterQuery<Conents>): Promise<Conents[]> {
        return this.conentsModel.find(filterQuery)
    }

    async create(model: Conents): Promise<Conents> {
        const newUser = new this.conentsModel(model);
        return newUser.save()
    }

    async findOneAndUpdate(filterQuery: FilterQuery<Conents>, item: Partial<Conents>): Promise<Conents> {     
        return this.conentsModel.findOneAndUpdate(filterQuery, item, { new: true });
    }

    async findByIdAndRemove(id: string): Promise<Conents>{        
        return this.conentsModel.findByIdAndDelete(id).exec();
    }

    async comment(filterQuery: FilterQuery<Conents>, item: Partial<any>): Promise<any> { 
        const map ={
            uId: item.uId, 
            comment: item.comment,
            createdAt: new Date().toISOString(),
            updatedAt: "",
        }
      const doc = await this.conentsModel.updateOne(filterQuery, {$push: {coments: map}});
      return doc._id;
    }

    async deleteComent(filterQuery: FilterQuery<Conents>, cid: string): Promise<any>{
        const doc = await this.conentsModel.findOne(filterQuery);
        doc.coments = doc.coments.filter((f: any)=> f._id != cid);
        await doc.save();
        return cid;
    }

    async like(filterQuery: FilterQuery<Conents>, item: Partial<any>): Promise<any> {
        const findItem = await this.conentsModel.findOne(filterQuery);
       
        if(findItem.like.find(f => f.uId == item.uId)) {

            if(findItem.like.find(f => f.refStatus == item.refStatus)){
                findItem.like =  findItem.like.filter((f: any) => f.uId != item.uId);
                await findItem.save();
                return "Unlike";
            }else{
                findItem.like.find(f => f.uId == item.uId).refStatus = item.refStatus;
                await findItem.save();
                return "Chnged"
            }
        }

        const like ={
            uId: item.uId,
            refStatus: item.refStatus,
            createdAt: new Date().toISOString(),
        }

        const doc = await this.conentsModel.updateOne(filterQuery, {$push: {like: like}});
        return (doc.ok)? "Like": "Error";
    }



} 