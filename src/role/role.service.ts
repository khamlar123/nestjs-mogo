/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { Role } from './schemas/role.schema';
import { v4 as uuidv4 } from 'uuid';
import { UpdateRoleDto } from './dto/updateRoleDto';

@Injectable()
export class RoleService { 

    constructor(private readonly roleRepository: RoleRepository) {}

    async getRoleById(roleId: string) : Promise<Role>{
        return this.roleRepository.findOne({ roleId: roleId})
    }

    async getRoleByName(rorleName: string): Promise<Role>{
        return this.roleRepository.findOne({ roleName:rorleName })
    }

    async getRoles(): Promise<Role[]> {
        return this.roleRepository.find({});
    }

    async createRole(name: string) : Promise<Role> {
        return this.roleRepository.create({
            roleId: uuidv4(),
            roleName: name,
        });
    }

    async updateRole(roleId: string, roleUpdates: UpdateRoleDto): Promise<Role>{
        return this.roleRepository.findOneAndUpdate({ roleId }, roleUpdates );
    }

    async remove(roleId: string): Promise<Role> {
        return this.roleRepository.findByIdAndRemove(roleId);
    }

}
