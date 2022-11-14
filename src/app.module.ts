import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { Country, CountrySchema } from './countries/country.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => {
    //     const username = configService.get('MONGO_USERNAME');
    //     const password = configService.get('MONGO_PASSWORD');
    //     const database = configService.get('MONGO_DATABASE');
    //     const host = configService.get('MONGO_HOST');

    //     return {
    //       uri: `mongodb://${username}:${password}@${host}`,
    //       dbname: database,
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
  ],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class AppModule {}
