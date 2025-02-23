import { Component } from '@angular/core';
import { HotelComponent } from "../hotel/hotel.component";
import { CommonModule } from '@angular/common';
import { DharmshalaComponent } from "../dharmshala/dharmshala.component";
import { InProgressComponent } from "../../common/in-progress/in-progress.component";
@Component({
  selector: 'app-stay-home',
  standalone: true,
  imports: [HotelComponent, CommonModule, DharmshalaComponent, InProgressComponent],
  templateUrl: './stay-home.component.html',
  styleUrl: './stay-home.component.css'
})
export class StayHomeComponent {
  selectCategory = "Hotel";
  stayCategory =[
    {
      "type" : "Hotel",
      "message" : "Currently we are not offering online Hotel booking",
      "image" : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550975.jpeg?k=6d2c22368ec017e1f99a4811c8abb1cb2d7fd829c9ddd12a82ff1aa77ab7da19&o="
    },
    {
      "type" : "Dharmshala",
      "message" : "",
      "image" : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550925.jpeg?k=c0db68290ad93f4dea18b95395397a874a8801159fb4d6308bd6164ebcd28a11&o="
    },
    {
      "type" : "Guest House",
      "message" : "",
      "image" : "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550098.jpeg?k=d1b5a6f6faa0c76496d57dd0d263a88c07ad220b3873e14fcd71c9d8a81c5c25&o="
    },
    {
      "type" : "Homestays",
      "message" : "",
      "image" : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550377.jpeg?k=ef93cbc1a3af0d6db84e27b6da280a4ef24dbcfeb065fcfeae4fe9c43dddd2da&o="
    }]; 

    getStayType(value:any){
    this.selectCategory = value; 
    }
}
