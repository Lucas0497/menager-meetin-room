import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatRoomComponent } from './creat-room/creat-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: 'rooms', component: RoomListComponent},
  {path: 'add', component: CreatRoomComponent },
  {path: 'update/:id', component: UpdateRoomComponent},
  {path: 'details/:id', component: RoomDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  title = 'client-room';
  
}
