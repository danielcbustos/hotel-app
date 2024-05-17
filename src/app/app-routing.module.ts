import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHotelComponent } from './hotel/create-hotel/create-hotel.component';
import { ListReservationComponent } from './hotel/list-reservation/list-reservation.component';

import { ManageHotelsComponent } from './hotel/manage-hotels/manage-hotels.component';
import { EditHotelComponent } from './hotel/edit-hotel/edit-hotel.component';

const routes: Routes = [
  { path: 'createHotel', component: CreateHotelComponent, pathMatch: 'full' },
  { path: 'listReservation', component: ListReservationComponent, pathMatch: 'full' },
  { path: 'manageHotels', component: ManageHotelsComponent, pathMatch: 'full' },
  { path: 'editHotel', component: EditHotelComponent, pathMatch: 'full' },
  

  { path: '**', redirectTo: 'manageHotels' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
