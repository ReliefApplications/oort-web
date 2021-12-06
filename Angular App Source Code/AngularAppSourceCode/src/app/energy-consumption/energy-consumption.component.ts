import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CountryInfo, CountryservicesService, EnergyDescription } from '../Services/countryservices.service';

@Component({
  selector: 'app-energy-consumption',
  templateUrl: './energy-consumption.component.html',
  styleUrls: ['./energy-consumption.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class EnergyConsumptionComponent implements OnInit, OnChanges {
  types: string[] = ["line", "stackedline", "fullstackedline"];
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];
  @Input() sContry: string;
  constructor(private service: CountryservicesService) {
    this.countriesInfo = service.getCountriesInfo();
    this.energySources = service.getEnergySources();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadChartData();
  }

  ngOnInit(): void {
    this.loadChartData();
  }

  private loadChartData() {
   
    if (this.sContry)
      this.countriesInfo = this.service.getCountriesInfo().filter(Cnt => {
        return Cnt.country.toLowerCase() == this.sContry.toLowerCase();
      }
      );
    else
      this.countriesInfo = this.service.getCountriesInfo();
  }

}
