import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {
  newHotel: Hotel = {
    id: 0,
    name: '',
    description: '',
    isEnable: false,
    rooms: []
  };

  hotels: Hotel[] = [];
  roomCounter: number = 0;
  constructor(private hotelService: HotelService) { }

  ngOnInit():void {

  }
  addRoom() {
    // Agregar una nueva habitación al hotel
    this.roomCounter++;

    this.newHotel.rooms.push({
      id: this.roomCounter,
      number: 0,
      type: '',
      price: 0,
      isAvailable: false
    });
  }

  
  onSubmit() {
    this.hotelService.addHotel(this.newHotel)
      .subscribe(newHotel => {
        console.log('Nuevo hotel agregado:', newHotel);     
        this.loadHotels();
      });
  }
  loadHotels() {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }
  
}
