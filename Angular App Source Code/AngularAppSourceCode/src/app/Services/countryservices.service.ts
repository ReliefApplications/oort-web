import { Injectable } from '@angular/core';

export class CountryInfo {
  country: string;
  hydro: number;
  oil: number;
  gas: number;
  coal: number;
  nuclear: number;
}

export class EnergyDescription {
  value: string;
  name: string;
}

let energySources: EnergyDescription[] = [
  { value: "hydro", name: "Hydro-electric" },
  { value: "oil", name: "Oil" },
  { value: "gas", name: "Natural gas" },
  { value: "coal", name: "Coal" },
  { value: "nuclear", name: "Nuclear" }
];

let countriesInfo: CountryInfo[]  = [{
  country: "USA",
  hydro: 59.8,
  oil: 937.6,
  gas: 582,
  coal: 564.3,
  nuclear: 187.9
}, {
  country: "China",
  hydro: 74.2,
  oil: 308.6,
  gas: 35.1,
  coal: 956.9,
  nuclear: 11.3
}, {
  country: "Russia",
  hydro: 40,
  oil: 128.5,
  gas: 361.8,
  coal: 105,
  nuclear: 32.4
}, {
  country: "Japan",
  hydro: 22.6,
  oil: 241.5,
  gas: 64.9,
  coal: 120.8,
  nuclear: 64.8
}, {
  country: "India",
  hydro: 19,
  oil: 119.3,
  gas: 28.9,
  coal: 204.8,
  nuclear: 3.8
}, {
  country: "Germany",
  hydro: 6.1,
  oil: 123.6,
  gas: 77.3,
  coal: 85.7,
  nuclear: 37.8
}];




export class MedalsInfo {
  country!: string;
  medals!: number;
}

let medals: MedalsInfo[] = [{
  country: "USA",
  medals: 110
}, {
  country: "China",
  medals: 100
}, {
  country: "Russia",
  medals: 72
}, {
  country: "Britain",
  medals: 47
}, {
  country: "Australia",
  medals: 46
}, {
  country: "Germany",
  medals: 41
}, {
  country: "France",
  medals: 40
}, {
  country: "South Korea",
  medals: 31
}];


export class Population {
  state!: string;
  maleyoung!: number;
  malemiddle!: number;
  maleolder!: number;
  femaleyoung!: number;
  femalemiddle!: number;
  femaleolder!: number;
}

let populationData: Population[]  = [{
  state: "USA",
  maleyoung: 29.956,
  malemiddle: 90.354,
  maleolder: 14.472,
  femaleyoung: 28.597,
  femalemiddle: 91.827,
  femaleolder: 20.362
}, {
  state: "India",
  maleyoung: 25.607,
  malemiddle: 55.793,
  maleolder: 3.727,
  femaleyoung: 24.67,
  femalemiddle: 57.598,
  femaleolder: 5.462
}, {
  state: "India",
  maleyoung: 13.493,
  malemiddle: 48.983,
  maleolder: 5.802,
  femaleyoung: 12.971,
  femalemiddle: 52.14,
  femaleolder: 12.61
}, {
  state: "Japan",
  maleyoung: 9.575,
  malemiddle: 43.363,
  maleolder: 9.024,
  femaleyoung: 9.105,
  femalemiddle: 42.98,
  femaleolder: 12.501
}, {
  state: "Mexico",
  maleyoung: 17.306,
  malemiddle: 30.223,
  maleolder: 1.927,
  femaleyoung: 16.632,
  femalemiddle: 31.868,
  femaleolder: 2.391
}, {
  state: "Germany",
  maleyoung: 6.679,
  malemiddle: 28.638,
  maleolder: 5.133,
  femaleyoung: 6.333,
  femalemiddle: 27.693,
  femaleolder: 8.318
}, {
  state: "United Kindom",
  maleyoung: 5.816,
  malemiddle: 19.622,
  maleolder: 3.864,
  femaleyoung: 5.519,
  femalemiddle: 19.228,
  femaleolder: 5.459
}];




@Injectable({
  providedIn: 'root'
})
export class CountryservicesService {

  constructor() { }
  getPopulationData(): Population[] {
    return populationData;
}

getMedalsData(): MedalsInfo[] {
  return medals;
}
getEnergySources(): EnergyDescription[] {
  return energySources;
}
getCountriesInfo(): CountryInfo[] {
  return countriesInfo;
}

}
