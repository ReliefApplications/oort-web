import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CountryservicesService, Population } from '../Services/countryservices.service';
@Component({
  selector: 'app-country-population',
  templateUrl: './country-population.component.html',
  styleUrls: ['./country-population.component.scss'],
  encapsulation:ViewEncapsulation.None,
})

export class CountryPopulationComponent implements OnInit,OnChanges {
 @Input() sContry : string ;
  public populationData: Population[];

  constructor(private service: CountryservicesService) {    
  }
  ngOnChanges(changes: SimpleChanges): void {

    const scountchange = changes.currentValue;
    this.loadChartData();
  }
  customizeItems(items: any[]) {
      var sortedItems: any[] = [];
      items.forEach(function(item) {
          var startIndex = item.series.stack === "male" ? 0 : 3;
          sortedItems.splice(startIndex, 0, item);
      });
      return sortedItems;
  }
  ngOnInit(){    
   this.loadChartData();
    console.log("LineChart:"+this.sContry);
   console.log( this.populationData);
  }

  private loadChartData()
  {
    if(this.sContry)    
    this.populationData = this.service.getPopulationData().filter( Cnt=>
      {       
      return Cnt.state.toLowerCase() == this.sContry.toLowerCase();
      }
      );
    else
    this.populationData = this.service.getPopulationData();
  }

  

}
