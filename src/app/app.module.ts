import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserSharedModule } from './user/shared/user-shared.module';
import { UserLayoutComponent } from './core/user-layout/user-layout.component';
import { UserMainbodyComponent } from './user/components/user-mainbody/user-mainbody.component';
import { UserAboutComponent } from './user/components/user-about/user-about.component';
import { UserForParticipantsComponent } from './user/components/user-for-participants/user-for-participants.component';
import { UserVisaInformationComponent } from './user/components/for-participants-subFolders/user-visa-information/user-visa-information.component';
import { UserTransportationInformationComponent } from './user/components/for-participants-subFolders/user-transportation-information/user-transportation-information.component';
import { UserSafetyMeasuresComponent } from './user/components/for-participants-subFolders/user-safety-measures/user-safety-measures.component';
import { UserBrochureComponent } from './user/components/for-participants-subFolders/user-brochure/user-brochure.component';
import { UserPocketGuideComponent } from './user/components/for-participants-subFolders/user-pocket-guide/user-pocket-guide.component';
import { UserHostComponent } from './user/components/for-participants-subFolders/user-host/user-host.component';
import { UserCallForHelpComponent } from './user/components/for-participants-subFolders/user-call-for-help/user-call-for-help.component';
import { UserSharmelsheikhComponent } from './user/components/user-sharmelsheikh/user-sharmelsheikh.component';
import { MainBodySharmelsheikhComponent } from './user/components/main-body-subfolders/main-body-sharmelsheikh/main-body-sharmelsheikh.component';
import { UserSharmelsheikhIntroductionComponent } from './user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-introduction/user-sharmelsheikh-introduction.component';
import { UserSharmelsheikhSafariComponent } from './user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-safari/user-sharmelsheikh-safari.component';
import { UserSharmelsheikhRasMohamedNationalParkComponent } from './user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-ras-mohamed-national-park/user-sharmelsheikh-ras-mohamed-national-park.component';
import { UserSharmelsheikhTheSharmElSheikhMuseumComponent } from './user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-the-sharm-el-sheikh-museum/user-sharmelsheikh-the-sharm-el-sheikh-museum.component';
import { UserSharmelsheikhTheOldMarketComponent } from './user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-the-old-market/user-sharmelsheikh-the-old-market.component';
import { UserSharmelsheikhTheBlueHoleComponent } from './user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-the-blue-hole/user-sharmelsheikh-the-blue-hole.component';
import { UserSharmelsheikhSohoSquareComponent } from './user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-soho-square/user-sharmelsheikh-soho-square.component';
import { UserSharmelsheikhStcatherineMountainComponent } from './user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-stcatherine-mountain/user-sharmelsheikh-stcatherine-mountain.component';
import { UserVenueComponent } from './user/components/user-venue/user-venue.component';
import { UserHotelsComponent } from './user/components/user-hotels/user-hotels.component';
import { UserGalleryComponent } from './user/components/user-gallery/user-gallery.component';
import { UserScheduleComponent } from './user/components/user-schedule/user-schedule.component';
import { UserOrganizersComponent } from './user/components/user-organizers/user-organizers.component';


@NgModule({
  declarations: [
    AppComponent,
    UserMainbodyComponent,
    UserLayoutComponent,
    UserAboutComponent,
    UserForParticipantsComponent,
    UserVisaInformationComponent,
    UserTransportationInformationComponent,
    UserSafetyMeasuresComponent,
    UserBrochureComponent,
    UserPocketGuideComponent,
    UserHostComponent,
    UserCallForHelpComponent,
    UserSharmelsheikhComponent,
    MainBodySharmelsheikhComponent,
    UserSharmelsheikhIntroductionComponent,
    UserSharmelsheikhSafariComponent,
    UserSharmelsheikhRasMohamedNationalParkComponent,
    UserSharmelsheikhTheSharmElSheikhMuseumComponent,
    UserSharmelsheikhTheOldMarketComponent,
    UserSharmelsheikhTheBlueHoleComponent,
    UserSharmelsheikhSohoSquareComponent,
    UserSharmelsheikhStcatherineMountainComponent,
    UserVenueComponent,
    UserHotelsComponent,
    UserGalleryComponent,
    UserScheduleComponent,
    UserOrganizersComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
