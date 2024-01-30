import {Component, Input, OnInit} from '@angular/core';
import {NavbarOptions} from "../../../interfaces/Interfaces";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() currentPage! : NavbarOptions;
  protected readonly NavbarOptions = NavbarOptions;

}
