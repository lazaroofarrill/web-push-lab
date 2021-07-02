import { Body, Controller, Param, Post } from '@nestjs/common'
import { PushService } from './push.service'
import { CreatePushDto } from './dto/create-push.dto'

@Controller('push')
export class PushController {
  constructor(private readonly pushService: PushService) {
  }

  @Post()
  broadcast(@Body() createPushDto: CreatePushDto) {
    return this.pushService.broadcast(createPushDto)
  }

  @Post(':id')
  push(@Param('id') id, @Body() createPushDto: CreatePushDto) {
    return this.pushService.push(id, createPushDto)
  }
}
