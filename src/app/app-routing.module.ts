import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuxVideoIndexComponent } from './pages/jeux_video/jeux-video-index/jeux-video-index.component';
import { JeuxVideoShowComponent } from './pages/jeux_video/jeux-video-show/jeux-video-show.component';
import { JeuxVideoEditComponent } from './pages/jeux_video/jeux-video-edit/jeux-video-edit.component';
import { JeuxVideoCreateComponent } from './pages/jeux_video/jeux-video-create/jeux-video-create.component';
import { ExpertIndexComponent } from './pages/expert/expert-index/expert-index.component';
import { ExpertEditComponent } from './pages/expert/expert-edit/expert-edit.component';
import { ExpertShowComponent } from './pages/expert/expert-show/expert-show.component';
import { ExpertCreateComponent } from './pages/expert/expert-create/expert-create.component';

const routes: Routes = [
  {path : "jeux_video", component : JeuxVideoIndexComponent },
  {path : "jeux_video/create", component : JeuxVideoCreateComponent },
  {path : "jeux_video/{id}", component : JeuxVideoShowComponent },
  {path : "jeux_video/edit/{id}", component : JeuxVideoEditComponent },
  
  {path : "expert", component : ExpertIndexComponent },
  {path : "expert/create", component : ExpertCreateComponent },
  {path : "expert/{id}", component : ExpertShowComponent  },
  {path : "expert/edit/{id}", component : ExpertEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
