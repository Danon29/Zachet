import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pic1: String = "assets/me.jpg"
  // myVal(item: any)
  // {
  //   console.log(item.target.value)
  // }
  getVal(title:string) {
    if(title!="")
  {
     alert(title);
  }
  else
  {
   alert("Сначала введи цифру");
  }
  }
}
