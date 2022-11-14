import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { countries } from './countries';
import { Country, CountryDocument } from './country.schema';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<CountryDocument>,
  ) {}

  // save() {
  //   countries.forEach((country) => {
  //     const newCountry = new this.countryModel(country);
  //     return newCountry.save();
  //   });
  // }

  async getAllCountries(documentsToSkip = 0, limitOfDocuments = 10) {
    let arr = [];
    const allCountries = await this.countryModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip)
      .limit(limitOfDocuments);

    allCountries.forEach((country) => {
      arr.push(country.name);
    });
    return arr;
  }

  async getCitiesOfCountry(
    countrySymbol: string,
    documentsToSkip = 0,
    limitOfDocuments = 10,
  ) {
    const country = await this.countryModel.findOne(
      { symbol: countrySymbol },
      {
        cities: { $slice: [Number(documentsToSkip), Number(limitOfDocuments)] },
      },
    );
    return country.cities;
  }
}
