import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifService: GifsService){

  }get gifs(): Gif[]{
    return this.gifService.gifList;
  }

}
