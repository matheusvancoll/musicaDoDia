import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CardComponent} from "./card/card.component";
import {NgIf} from "@angular/common";
import {NavbarOptions} from "../../../interfaces/Interfaces";
import {CardGenerosComponent} from "../../components/card-generos/card-generos.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CardComponent,
    NgIf,
    CardGenerosComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {


  itemSelected = NavbarOptions.INICIO
}
