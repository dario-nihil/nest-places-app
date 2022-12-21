import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class PlacesController {
  @Get()
  getPlaces() {
    console.log('GET Request in Places');
    return { message: 'It Works' };
  }
}
