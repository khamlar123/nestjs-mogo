import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Menu } from './schemas/menu.schema';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuService } from './menu.service';

@Controller('menues')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Get(':menueId')
    async getUser(@Param('menueId') menueId: string): Promise<Menu> {
      return this.menuService.getUserById(menueId);
    }
  
    @Get()
    async getUsers(): Promise<Menu[]> {
        return this.menuService.getUsers();
    }
  
    @Post()
    async createUser(@Body() createUserDto: CreateMenuDto): Promise<Menu> {
        return this.menuService.createUser(createUserDto)
    }
  
    @Patch(':menueId')
    async updateUser(@Param('menueId') userId: string, @Body() updateUserDto: UpdateMenuDto): Promise<Menu> {
      return this.menuService.updateUser(userId, updateUserDto);
    }
  
    @Delete(':menueId')
    async remove(@Param('menueId') menueId: string ): Promise<Menu>{
      return this.menuService.remove(menueId);
    }
}