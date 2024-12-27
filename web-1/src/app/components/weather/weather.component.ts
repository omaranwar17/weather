
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';

import { WeaterService } from '../../services/weater.service';
import { weathers } from '../../module/weater';
import { City } from '../../module/city';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, LoadingComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  weatherData: weathers[] = [];
isLoading:boolean = false
  cityData:string = 'cairo'
  cityName!:City
  title = 'web-1';
  constructor(private weatherSer:WeaterService){}

ngOnInit(): void {
this.gitWeater()
}
gitWeater(){
if(this.cityData){
this.isLoading = true

  this.weatherSer.getWeater(this.cityData).subscribe({
next:((data)=>{
  console.log(data      );
  this.isLoading = false
  this.weatherData = data.forecast.forecastday ;


this.cityName = data.location

}),
error:((ers)=>{
  console.log(ers);
this.isLoading = false
})
  })

}
}
}
