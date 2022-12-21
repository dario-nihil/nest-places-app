import { Controller, Get, Param } from '@nestjs/common';

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
    user: 'u1',
  },
];
@Controller('/api/places')
export class PlacesController {
  @Get('/:placeId')
  getPlaces(@Param('placeId') placeId: string) {
    const place = DUMMY_PLACES.find((place) => place.id === placeId);

    return { place };
  }
}
