import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';

@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscriberService: SubscribeService) {
  }

  @Post()
  create(@Body() createSubscriberDto: CreateSubscribeDto) {
    return this.subscriberService.create(createSubscriberDto);
  }

  @Get()
  findAll() {
    return this.subscriberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriberDto: UpdateSubscribeDto) {
    return this.subscriberService.update(+id, updateSubscriberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriberService.remove(+id);
  }
}
