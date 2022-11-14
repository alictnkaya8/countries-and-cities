import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Country, CountrySchema } from './country.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
