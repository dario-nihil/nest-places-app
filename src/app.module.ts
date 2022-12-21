import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [PlacesController, UsersController],
  providers: [],
})
export class AppModule {}
