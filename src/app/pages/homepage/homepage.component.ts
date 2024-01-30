import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgIf} from "@angular/common";
import {NavbarOptions} from "../../../interfaces/Interfaces";
import {CardGenerosComponent} from "../../components/card-generos/card-generos.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    NgIf,
    CardGenerosComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {

  protected readonly NavbarOptions = NavbarOptions;
}
