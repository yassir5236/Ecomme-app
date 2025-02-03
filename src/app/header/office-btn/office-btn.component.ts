import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-office-btn',
  imports: [],
  templateUrl: './office-btn.component.html',
  styleUrl: './office-btn.component.css'
})
export class OfficeBtnComponent {

  label=input('')
  btnClicked =output();
  // handelClick(){
  //   console.log(' clicked');
  // }

handelClicked(){
  console.log('Clicked from the child ');
  this.btnClicked.emit();
}
}
