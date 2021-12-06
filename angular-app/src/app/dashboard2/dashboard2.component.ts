import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {

 
  @Input() country: string;
  @Input() safeproperty:any;
  varConty: string;
  position: string;
  region: string;
  emergency: string;
  contry: string = '-1';
  selectedCountry:string = "All country";
  @Input() CountryList: Array<any> = [];
  constructor() {

   }
  ngOnChanges(changes: SimpleChanges): void {
    this.LoadData();
    this.setLabelAndCountry();
  }

  ngOnInit(): void {
    this.LoadData();
  }
  private LoadData() {
    if(this.country)
    {
      this.selectedCountry = this.country;
    }
    this.varConty = this.country;
  }

  private setLabelAndCountry(){
    if (this.safeproperty &&
       this.safeproperty.key == 'position' && this.safeproperty.value){
         this.position = this.safeproperty.value.name;
       }
     else  if (this.safeproperty &&
        this.safeproperty.key == 'region' && this.safeproperty.value){
          this.region = this.safeproperty.value.name;
          this.CountryList = this.safeproperty.value.child;
        }
        else  if ( this.safeproperty &&
          this.safeproperty.key == 'country' && this.safeproperty.value){
            this.contry = this.safeproperty.value.id;

          }
          else  if (this.safeproperty &&
            this.safeproperty.key == 'emergency' && this.safeproperty.value){
              this.emergency = this.safeproperty.value.name;
            }
  }


}
