import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent { 
    hotelDetails =[
      {
        "hotelImage" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
        "name":"Hotel Chitrakoot 1",
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
        "hotelImage" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
        "name":"Hotel Chitrakoot 2",
        "location" : "Ramghat Chitrakoot",
        "distance" : "2.7 KM from railway station",
        "roomType" : "Deluxe Twin Room" ,
        "bedType":"2 single beds",
        "availability":"Only 2 rooms left at this price",
        "price":"₹3,299 + ₹396 taxes",
        "review":"7.8 - Good (1,319 real reviews)"},
      {
        "hotelImage" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
        "name":"Hotel Chitrakoot 3",
        "location" : "Ramghat Chitrakoot",
        "distance" : "2.7 KM from railway station",
        "roomType" : "Deluxe Twin Room" ,
        "bedType":"2 single beds",
        "availability":"Only 2 rooms left at this price",
        "price":"₹3,299 + ₹396 taxes",
        "review":"7.8 - Good (1,319 real reviews)"},
      {
        "hotelImage" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
        "name":"Hotel Chitrakoot 4",
        "location" : "Ramghat Chitrakoot",
        "distance" : "2.7 KM from railway station",
        "roomType" : "Deluxe Twin Room" ,
        "bedType":"2 single beds",
        "availability":"Only 2 rooms left at this price",
        "price":"₹3,299 + ₹396 taxes",
        "review":"7.8 - Good (1,319 real reviews)"},
      {
        "hotelImage" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
        "name":"Hotel Chitrakoot 5",
        "location" : "Ramghat Chitrakoot",
        "distance" : "2.7 KM from railway station",
        "roomType" : "Deluxe Twin Room" ,
        "bedType":"2 single beds",
        "availability":"Only 2 rooms left at this price",
        "price":"₹3,299 + ₹396 taxes",
        "review":"7.8 - Good (1,319 real reviews)"},
      {
        "hotelImage" : "https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",
        "name":"Hotel Chitrakoot 6",
        "location" : "Ramghat Chitrakoot",
        "distance" : "2.7 KM from railway station",
        "roomType" : "Deluxe Twin Room" ,
        "bedType":"2 single beds",
        "availability":"Only 2 rooms left at this price",
        "price":"₹3,299 + ₹396 taxes",
        "review":"7.8 - Good (1,319 real reviews)"}
    ];
  }
