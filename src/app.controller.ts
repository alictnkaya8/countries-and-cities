import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllCountries() {
    return this.appService.getAllCountries();
  }

  @Get(':country')
  getCitiesOfCountry(@Param('country') country) {
    return this.appService.getCitiesOfCountry(country);
  }
}
