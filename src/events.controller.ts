import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventDto } from './create-event-dto';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return [{ id: 1, name: 'First' }];
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    return input;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() input) {
    return input;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {
    return `Deleting ${id}`;
  }
}
