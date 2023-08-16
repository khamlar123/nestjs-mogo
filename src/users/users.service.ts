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

    async createUser(email: string, age: number, role: string): Promise<any> {

        const getRole = await this.rolesRepository.findOne({roleName:role});

        if(getRole === null){
            return  `can't find role ${role}`;
        }

        const addRole = await this.usersRepository.create({
            userId: uuidv4(),
            email,
            age,
            favoriteFoods: [],
            role:{
                roleName: getRole.roleName,
                roleId: getRole.roleId,
            }
        })
        return addRole.userId;
    }

    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return await this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    }

    async remove(userId: string): Promise<User> {     
        return await this.usersRepository.findByIdAndRemove(userId);
    }
}