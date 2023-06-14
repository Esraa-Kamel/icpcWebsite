import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { RouterModule } from '@angular/router';
import { UserCarouselComponent } from './components/user-carousel/user-carousel.component';



@NgModule({
  declarations: [
    UserHeaderComponent,
    UserFooterComponent,
    UserNavbarComponent,
    UserCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UserHeaderComponent,
    UserFooterComponent,
    UserNavbarComponent,
  UserCarouselComponent
  ]
})
export class UserSharedModule { }
