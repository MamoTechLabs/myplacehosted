import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'rooms',
    component: RoomsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
