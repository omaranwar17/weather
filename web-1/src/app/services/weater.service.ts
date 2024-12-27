import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { City } from '../module/city';


const API_KEY = "575110ef952a42209d7125213242512"



@Injectable({
  providedIn: 'root'
})


export class WeaterService {


  constructor(private _http:HttpClient) { }





getWeater(cityName:string):Observable<any>{

  return this._http.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7`)




    }
  }






