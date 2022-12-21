import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreatePlaceDto } from './dto/create-place.dto';
import { ICoord } from 'src/shared/icoord';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famouse sky craper in the world!',
    location: {
      lat: 37.1040067,
      lng: -68.1145473,
    },
    address: '20 W 34th St., New York, NY 10001',
    creator: 'u1',
  },
];
@Controller('/api/places')
export class PlacesController {
  @Get('/:placeId')
  getPlaceByID(@Param('placeId') placeId: string) {
    const place = DUMMY_PLACES.find((place) => place.id === placeId);

    if (!place) {
      throw new HttpException(
        'Could not find a place for the provided ID.',
        HttpStatus.NOT_FOUND,
      );
    }

    return { place };
  }

  @Get('/user/:userId')
  getPlaceByUserID(@Param('userId') userId: string) {
    const place = DUMMY_PLACES.find((place) => place.creator === userId);

    if (!place) {
      throw new HttpException(
        'Could not find a place for the provided user ID.',
        HttpStatus.NOT_FOUND,
      );
    }

    return { place };
  }

  @Post('/')
  createPlace(@Body() createTaskDto: CreatePlaceDto) {
    const { title, description, coordinates, address, creator } = createTaskDto;

    const createdPlace = {
      id: uuid(),
      title,
      description,
      location: coordinates,
      address,
      creator,
    };

    DUMMY_PLACES.push(createdPlace);

    return { place: createdPlace };
  }
}
