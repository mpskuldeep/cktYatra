import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dharmshala',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dharmshala.component.html',
  styleUrl: './dharmshala.component.css'
})
export class DharmshalaComponent {

  dharmshalaDetails =[
    {
      "image" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
      "name":"Kushwaha Dharmshala",
      "location" : "Ramghat Chitrakoot",
      "distance" : "2.7 KM from railway station",
      "roomType" : "Deluxe Twin Room" ,
      "bedType":"2 single beds",
      "availability":"Only 2 rooms left at this price",
      "price":"₹3,299 + ₹396 taxes",
      "review":"7.8 - Good (1,319 real reviews)",
      "rating" : "3.5"
    },
    {
      "image" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
      "name":"Soni Dharmshala",
      "location" : "Ramghat Chitrakoot",
      "distance" : "2.7 KM from railway station",
      "roomType" : "Deluxe Twin Room" ,
      "bedType":"2 single beds",
      "availability":"Only 2 rooms left at this price",
      "price":"₹3,299 + ₹396 taxes",
      "review":"7.8 - Good (1,319 real reviews)"},
    {
      "image" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
      "name":"Hotel Taj",
      "location" : "Ramghat Chitrakoot",
      "distance" : "2.7 KM from railway station",
      "roomType" : "Deluxe Twin Room" ,
      "bedType":"2 single beds",
      "availability":"Only 2 rooms left at this price",
      "price":"₹3,299 + ₹396 taxes",
      "review":"7.8 - Good (1,319 real reviews)"},
    {
      "image" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
      "name":"Hotel Taj",
      "location" : "Ramghat Chitrakoot",
      "distance" : "2.7 KM from railway station",
      "roomType" : "Deluxe Twin Room" ,
      "bedType":"2 single beds",
      "availability":"Only 2 rooms left at this price",
      "price":"₹3,299 + ₹396 taxes",
      "review":"7.8 - Good (1,319 real reviews)"},
    {
      "image" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
      "name":"Hotel Taj",
      "location" : "Ramghat Chitrakoot",
      "distance" : "2.7 KM from railway station",
      "roomType" : "Deluxe Twin Room" ,
      "bedType":"2 single beds",
      "availability":"Only 2 rooms left at this price",
      "price":"₹3,299 + ₹396 taxes",
      "review":"7.8 - Good (1,319 real reviews)"},
    {
      "image" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
      "name":"Hotel Taj",
      "location" : "Ramghat Chitrakoot",
      "distance" : "2.7 KM from railway station",
      "roomType" : "Deluxe Twin Room" ,
      "bedType":"2 single beds",
      "availability":"Only 2 rooms left at this price",
      "price":"₹3,299 + ₹396 taxes",
      "review":"7.8 - Good (1,319 real reviews)"}
  ];
}
