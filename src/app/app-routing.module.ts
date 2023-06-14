import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './core/user-layout/user-layout.component';

const routes: Routes = [
{ 
  path:"",
  component: UserLayoutComponent,loadChildren: () => import("./core/user-layout/user-layout.module").then((m) => m.UserLayoutModule)

},
{
  path:"**",
  redirectTo: "/"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
