import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './schemas/role.schema';
import { CreateRoleDto } from './dto/createRoleDto';
import { UpdateRoleDto } from './dto/updateRoleDto';

@Controller('roles')
export class RoleController {

constructor(private readonly roleService: RoleService) {}

    @Get(':roleId')
    async getRole(@Param('roleId') roleId: string): Promise<Role> {
        return this.roleService.getRoleById(roleId);
    }

    @Get()
    async getRolse(): Promise<Role[]> {
        return this.roleService.getRoles();
    }

    @Post()
    async createRole(@Body() createRole: CreateRoleDto): Promise<Role> {
        return this.roleService.createRole(createRole.roleName);
    }

    @Patch(':roleId')
    async updateRole(@Param('roleId') roleId: string, @Body() updateRoleDto: UpdateRoleDto): Promise<Role> {
        return this.roleService.updateRole(roleId, updateRoleDto);
    }

    @Delete(':roleId')
    async remove(@Param('roleId') roleId: string): Promise<Role>{
        return this.roleService.remove(roleId);
    }

}
