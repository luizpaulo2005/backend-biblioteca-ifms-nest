import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CampusService } from './campus.service';
import { CreateCampusDto } from './dto/create-campus.dto';
import { UpdateCampusDto } from './dto/update-campus.dto';

@Controller('campus')
export class CampusController {
  constructor(private readonly campusService: CampusService) {}

  @Post()
  create(@Body() body: CreateCampusDto) {
    return this.campusService.create(body);
  }

  @Get()
  findAll() {
    return this.campusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: CreateCampusDto['id']) {
    return this.campusService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: CreateCampusDto['id'],
    @Body() body: UpdateCampusDto,
  ) {
    return this.campusService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: CreateCampusDto['id']) {
    return this.campusService.remove(id);
  }
}
