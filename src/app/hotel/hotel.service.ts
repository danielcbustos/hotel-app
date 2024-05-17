import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { Hotel } from './hotel';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotels: Hotel[] = [
    {
      id: 1,
      name: 'Decameron Cartagena',
      description: 'El mejor hotel de la costa',
      isEnable: true,
      rooms: [
        { id: 101, number: 101, type: 'Sencilla', price: 150000, isAvailable: true },
        { id: 102, number: 102, type: 'Doble', price: 180000, isAvailable: true }
      ]
    },
    {
      id: 2,
      name: 'Hotel Barichara',
      description: 'Una experiencia cercana con la naturaleza',
      isEnable: false,
      rooms: [
        { id: 201, number: 201, type: 'Suite', price: 220000, isAvailable: true }
      ]
    }
  ];
  private localStorageKey = 'hotels';

constructor() { }
getHotels(): Observable<Hotel[]> {
  const localStorageHotels = this.retrieveHotelsFromLocalStorage();
    const allHotels = [...this.hotels, ...localStorageHotels];
    return of(allHotels);
}

addHotel(newHotel: Hotel): Observable<Hotel> {
  const localStorageHotels = this.retrieveHotelsFromLocalStorage();
  const highestId = localStorageHotels.reduce((max, hotel) => hotel.id > max ? hotel.id : max, 0);
  const hotelCopy: Hotel = { ...newHotel, id: highestId + 1 };
  localStorageHotels.push(hotelCopy);
  this.saveHotelsToLocalStorage(localStorageHotels);
  console.log('Updated list of hotels:', localStorageHotels); 
  return of(hotelCopy).pipe(
    tap(_ => console.log('Hotel added to the service')),
    catchError(this.handleError<Hotel>('addHotel'))
  );
}
updateHotel(updatedHotel: Hotel): Observable<Hotel> {
  const index = this.hotels.findIndex(hotel => hotel.id === updatedHotel.id);
  if (index !== -1) {
    this.hotels[index] = updatedHotel;
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.hotels));
  }
  return of(updatedHotel).pipe(
    tap(_ => console.log('Hotel updated in the service')),
    catchError(this.handleError<Hotel>('updateHotel'))
  );
}

private retrieveHotelsFromLocalStorage(): Hotel[] {
  const hotelsData = localStorage.getItem(this.localStorageKey);
  return hotelsData ? JSON.parse(hotelsData) : [];
}

private saveHotelsToLocalStorage(hotels: Hotel[]): void {
  localStorage.setItem(this.localStorageKey, JSON.stringify(hotels));
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

}
