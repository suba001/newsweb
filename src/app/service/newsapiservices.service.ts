import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=de&apiKey=875f693439c44fe8abd9a8dc4959779b";
  techApiUrl="https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=875f693439c44fe8abd9a8dc4959779b";
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=875f693439c44fe8abd9a8dc4959779b";

topHeading():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}
techNews():Observable<any>
{
  return this._http.get(this.techApiUrl);
}
businessNews():Observable<any>
{
  return this._http.get(this.businessApiUrl);
}
}
