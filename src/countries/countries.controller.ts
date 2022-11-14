import { Controller, Get, Param, Query } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { PaginationParams } from '../utils/paginationParams';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  // @Get()
  // save() {
  //   return this.appService.save();
  // }

  @Get()
  getAllCountries(@Query() { skip, limit }: PaginationParams) {
    return this.countriesService.getAllCountries(skip, limit);
  }

  @Get(':countrySymbol')
  getCitiesOfCountry(
    @Param('countrySymbol') countrySymbol,
    @Query() { skip, limit }: PaginationParams,
  ) {
    return this.countriesService.getCitiesOfCountry(countrySymbol, skip, limit);
  }
}
