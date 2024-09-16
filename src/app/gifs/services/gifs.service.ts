import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interface';

// const GIPHY_API_KEY = 'shjMvEfHvPfLsdfL36mirVSk1kolhetH';


@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'shjMvEfHvPfLsdfL36mirVSk1kolhetH';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient){}

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  // organizacion de elementos en la busqueda
  private organiceHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag != tag)
    }

    this._tagsHistory.unshift(tag);
    // limite de 10 elementos
    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }

  // buscador
   searchTag (tag: string): void{
    // validacion de enter
    if(tag.length === 0 ) return;
    this.organiceHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '12')
    .set('q', tag)

    // observable
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe(resp => {

      this.gifList = resp.data;
      console.log({gifs: this.gifList});

    })

  }

}
