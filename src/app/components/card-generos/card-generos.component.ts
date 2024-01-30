import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-generos',
  standalone: true,
  imports: [],
  templateUrl: './card-generos.component.html',
  styleUrl: './card-generos.component.css'
})
export class CardGenerosComponent {

  @Input()
  colorBackground!: string

  @Input()
  labelGenre! : string

  @Input()
  anchorGenre! : string

  @Input()
  imageCover! : string
}
