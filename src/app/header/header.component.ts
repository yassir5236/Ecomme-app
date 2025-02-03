import { Component } from '@angular/core';
import { OfficeBtnComponent } from "./office-btn/office-btn.component";

@Component({
  selector: 'app-header',
  imports: [OfficeBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  handlebtn(){
    console.log('Office Button Clicked');
  }

}
