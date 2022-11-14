import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { countries } from './countries';
import { Country, CountryDocument } from './country.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<CountryDocument>,
  ) {}

  // save() {
  //   countries.forEach((country) => {
  //     const newCountry = new this.countryModel(country);
  //     return newCountry.save();
  //   });
  // }

  async getAllCountries() {
    let arr = [];
    const allCountries = await this.countryModel.find();
    allCountries.forEach((country) => {
      arr.push(country.name);
    });
    return arr;
  }

  async getCitiesOfCountry(countrySymbol: string) {
    const country = await this.countryModel.findOne({ symbol: countrySymbol });
    return country.cities;
  }
}
