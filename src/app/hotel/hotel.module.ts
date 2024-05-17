import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { AppRoutingModule } from '../app-routing.module';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { FormsModule } from '@angular/forms';
import { ManageHotelsComponent } from './manage-hotels/manage-hotels.component';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule, 
    FormsModule
  ],
  exports:[CreateHotelComponent,ListReservationComponent,ManageHotelsComponent],
  declarations: [CreateHotelComponent,ListReservationComponent,ManageHotelsComponent]
})
export class HotelModule { }
