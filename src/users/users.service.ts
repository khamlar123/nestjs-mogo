import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
import { RoleRepository } from "src/role/role.repository";

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly rolesRepository: RoleRepository,
    ) {}

    async getUserById(userId: string): Promise<User> {
        return await this.usersRepository.findOne({ userId })
    }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find({});
    }

    async createUser(model): Promise<any> {
        const addRole = await this.usersRepository.create({
            userId: uuidv4(),
            email: model.email,
            age: model.age,
            password: model.password,
            roleName:{
                roleName: model.roleName,
                roleId: uuidv4(),
            }
        })
        return addRole.userId;
    }

    async updateUser(userId: string, userUpdates): Promise<User> {
        return await this.usersRepository.findOneAndUpdate({userId}, userUpdates);
    }

    async remove(userId: string): Promise<User> {     
        return await this.usersRepository.findByIdAndRemove(userId);
    }
}