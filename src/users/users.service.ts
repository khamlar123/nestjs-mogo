import { Injectable } from "@nestjs/common";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository,

    ) {}

    async getUserById(userId: string): Promise<User> {
        return await this.usersRepository.findOne({_id: userId})
    }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find({});
    }

    async createUser(model: CreateUserDto): Promise<any> {
        const addRole = await this.usersRepository.create(model)
        return addRole;
    }

    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        userUpdates.updatedAt = new Date().toISOString();
        return await this.usersRepository.findOneAndUpdate({_id: userId}, userUpdates);
    }

    async remove(userId: string): Promise<User> {     
        return await this.usersRepository.findByIdAndRemove(userId);
    }
}