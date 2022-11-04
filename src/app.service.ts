import { Injectable } from '@nestjs/common';
import { countries } from './countries';

@Injectable()
export class AppService {
  getAllCountries() {
    return Object.keys(countries);
  }

  getCitiesOfCountry(country: string) {
    return countries[country];
  }
}
