import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
