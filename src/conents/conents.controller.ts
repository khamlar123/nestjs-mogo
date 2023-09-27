import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Conents } from './schemas/conent.schema';
import { CreateConentDto } from './dto/create-conent.dto';
import { UpdateConentDto } from './dto/update-conent.dto';
import { ConentsService } from './conents.service';
import { ComentDto } from './dto/coment.dto';

@Controller('conents')
export class ConentsController {
    constructor(private readonly conentsService: ConentsService) {}

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Conents> {
      return this.conentsService.findById(id);
    }
  
    @Get()
    async findAll(): Promise<Conents[]> {
        return this.conentsService.filterItem();
    }
  
    @Post()
    async create(@Body() createUserDto: CreateConentDto): Promise<Conents> {
        return this.conentsService.createItem(createUserDto)
    }
  
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateConentDto): Promise<Conents> {
      return this.conentsService.updateItem(id, updateUserDto);
    }

    @Patch('coment/:id')
    async coment(@Param('id') id: string, @Body() model: ComentDto ){
      return this.conentsService.comment(id, model);
    }

    @Patch('delcoment/:id/:index')
    async delcoment(@Param('id') id: string, @Param('index') index: string){
      return this.conentsService.deleteComent(id, index);
    }

    @Post('like')
    async like(@Body() model: {id: string,uId: string, refStatus: string}){
      return this.conentsService.like(model);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string ): Promise<Conents>{
      return this.conentsService.remove(id);
    }
}