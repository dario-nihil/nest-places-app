import { IsNotEmpty } from 'class-validator';

import { ICoord } from 'src/shared/icoord';

export class CreatePlaceDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  coordinates: ICoord;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  creator: string;
}
