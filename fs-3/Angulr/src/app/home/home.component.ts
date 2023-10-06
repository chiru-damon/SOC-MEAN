import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  team=['Chiru','Kowshik','Harsha','Joel','Mani','Gopi']

  popup(e:any){
    console.log(e)
  }

}
