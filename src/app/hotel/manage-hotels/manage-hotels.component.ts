import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-hotels',
  templateUrl: './manage-hotels.component.html',
  styleUrls: ['./manage-hotels.component.css']
})
export class ManageHotelsComponent implements OnInit {

  hotels: Hotel[] = [];
  constructor(private hotelService: HotelService, private router:Router) { }

  ngOnInit():void {
    this.loadHotels();
  }
  loadHotels() {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }
  navigateToCreateHotel(): void {
    this.router.navigate(['/createHotel']);
  }

}
