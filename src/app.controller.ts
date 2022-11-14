import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // save() {
  //   return this.appService.save();
  // }

  @Get()
  getAllCountries() {
    return this.appService.getAllCountries();
  }

  @Get(':countrySymbol')
  getCitiesOfCountry(@Param('countrySymbol') countrySymbol) {
    return this.appService.getCitiesOfCountry(countrySymbol);
  }
}
