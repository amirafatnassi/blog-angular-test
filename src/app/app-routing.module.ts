import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes =[
  { path:'add-post', component:AddPostComponent},
  { path:'update-post/:i', component:UpdatePostComponent},
  { path:'list-post/', component:ListPostComponent},
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
