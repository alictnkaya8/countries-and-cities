import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountryDocument = Country & Document;

@Schema()
export class Country {
  @Prop()
  name: string;

  @Prop()
  symbol: string;

  @Prop()
  phone_code: string;

  @Prop()
  cities: string[];
}

export const CountrySchema = SchemaFactory.createForClass(Country);
