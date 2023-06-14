import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBrochureComponent } from 'src/app/user/components/for-participants-subFolders/user-brochure/user-brochure.component';
import { UserCallForHelpComponent } from 'src/app/user/components/for-participants-subFolders/user-call-for-help/user-call-for-help.component';
import { UserHostComponent } from 'src/app/user/components/for-participants-subFolders/user-host/user-host.component';
import { UserPocketGuideComponent } from 'src/app/user/components/for-participants-subFolders/user-pocket-guide/user-pocket-guide.component';
import { UserSafetyMeasuresComponent } from 'src/app/user/components/for-participants-subFolders/user-safety-measures/user-safety-measures.component';
import { UserTransportationInformationComponent } from 'src/app/user/components/for-participants-subFolders/user-transportation-information/user-transportation-information.component';
import { UserVisaInformationComponent } from 'src/app/user/components/for-participants-subFolders/user-visa-information/user-visa-information.component';
import { UserSharmelsheikhIntroductionComponent } from 'src/app/user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-introduction/user-sharmelsheikh-introduction.component';
import { UserSharmelsheikhRasMohamedNationalParkComponent } from 'src/app/user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-ras-mohamed-national-park/user-sharmelsheikh-ras-mohamed-national-park.component';
import { UserSharmelsheikhSafariComponent } from 'src/app/user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-safari/user-sharmelsheikh-safari.component';
import { UserSharmelsheikhSohoSquareComponent } from 'src/app/user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-soho-square/user-sharmelsheikh-soho-square.component';
import { UserSharmelsheikhStcatherineMountainComponent } from 'src/app/user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-stcatherine-mountain/user-sharmelsheikh-stcatherine-mountain.component';
import { UserSharmelsheikhTheBlueHoleComponent } from 'src/app/user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-the-blue-hole/user-sharmelsheikh-the-blue-hole.component';
import { UserSharmelsheikhTheOldMarketComponent } from 'src/app/user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-the-old-market/user-sharmelsheikh-the-old-market.component';
import { UserSharmelsheikhTheSharmElSheikhMuseumComponent } from 'src/app/user/components/sharm-el-sheikh-subfolders/user-sharmelsheikh-the-sharm-el-sheikh-museum/user-sharmelsheikh-the-sharm-el-sheikh-museum.component';
import { UserAboutComponent } from 'src/app/user/components/user-about/user-about.component';
import { UserForParticipantsComponent } from 'src/app/user/components/user-for-participants/user-for-participants.component';
import { UserGalleryComponent } from 'src/app/user/components/user-gallery/user-gallery.component';
import { UserHotelsComponent } from 'src/app/user/components/user-hotels/user-hotels.component';
import { UserMainbodyComponent } from 'src/app/user/components/user-mainbody/user-mainbody.component';
import { UserOrganizersComponent } from 'src/app/user/components/user-organizers/user-organizers.component';
import { UserScheduleComponent } from 'src/app/user/components/user-schedule/user-schedule.component';
import { UserSharmelsheikhComponent } from 'src/app/user/components/user-sharmelsheikh/user-sharmelsheikh.component';
import { UserVenueComponent } from 'src/app/user/components/user-venue/user-venue.component';

const routes: Routes = [
  {
    path:"",
    component: UserMainbodyComponent
  },
  {
    path:"Home",
    component: UserMainbodyComponent
  },
  {
    path:"About",
    component: UserAboutComponent
  },
  {
    path:"Venue",
    component: UserVenueComponent
  },
  {
    path:"Hotels",
    component: UserHotelsComponent
  },
  {
    path:"Gallery",
    component: UserGalleryComponent
  },
  {
    path:"Schedule",
    component: UserScheduleComponent
  },
  {
    path:"Organizers",
    component: UserOrganizersComponent
  }
  ,  
  {
    path:"Call-For-Help",
    component: UserCallForHelpComponent
  },
  {
    path:"Sharm-El-Sheikh",component: UserSharmelsheikhComponent, children:[
      {
        path:"",
        component: UserSharmelsheikhIntroductionComponent
      }
    ,
    {
      path:"Introduction",
      component: UserSharmelsheikhIntroductionComponent
    }
    ,
    {
      path:"Safari",
      component: UserSharmelsheikhSafariComponent
    }
    ,
    {
      path:"Ras-Mohammed-National-Park",
      component: UserSharmelsheikhRasMohamedNationalParkComponent
    }
    ,
    {
      path:"The-Sharm-El-Sheikh-Museum",
      component: UserSharmelsheikhTheSharmElSheikhMuseumComponent
    }
    ,
    {
      path:"The-Old-Market",
      component: UserSharmelsheikhTheOldMarketComponent
    }
    ,
    {
      path:"The-Blue-Hole",
      component: UserSharmelsheikhTheBlueHoleComponent
    }
    ,
    {
      path:"Soho-Square",
      component: UserSharmelsheikhSohoSquareComponent
    }
    ,
    {
      path:"StCatherine-Mountain",
      component: UserSharmelsheikhStcatherineMountainComponent
    }
    ]
  }
  ,

  {
    path:"For-Participants",component: UserForParticipantsComponent, children:[
      {
        path:"",
        component: UserVisaInformationComponent
      }
    ,
    {
      path:"Visa-Information",
      component: UserVisaInformationComponent
    }
    ,
    {
      path:"Transportation-Information",
      component: UserTransportationInformationComponent
    }
    ,
    {
      path:"Safety-Measures",
      component: UserSafetyMeasuresComponent
    }
    ,
    {
      path:"Brochure",
      component: UserBrochureComponent
    }
    ,
    {
      path:"Pocket-Guide",
      component: UserPocketGuideComponent
    }
    ,
    {
      path:"Host",
      component: UserHostComponent
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
