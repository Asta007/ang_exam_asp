import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/partials/navbar/navbar.component';
import { SidebarComponent } from './pages/partials/sidebar/sidebar.component';
import { HeadComponent } from './pages/partials/head/head.component';
import { JeuxVideoIndexComponent } from './pages/jeux_video/jeux-video-index/jeux-video-index.component';
import { JeuxVideoShowComponent } from './pages/jeux_video/jeux-video-show/jeux-video-show.component';
import { JeuxVideoCreateComponent } from './pages/jeux_video/jeux-video-create/jeux-video-create.component';
import { JeuxVideoEditComponent } from './pages/jeux_video/jeux-video-edit/jeux-video-edit.component';
import { ExpertCreateComponent } from './pages/expert/expert-create/expert-create.component';
import { ExpertIndexComponent } from './pages/expert/expert-index/expert-index.component';
import { ExpertShowComponent } from './pages/expert/expert-show/expert-show.component';
import { ExpertEditComponent } from './pages/expert/expert-edit/expert-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HeadComponent,
    JeuxVideoIndexComponent,
    JeuxVideoShowComponent,
    JeuxVideoCreateComponent,
    JeuxVideoEditComponent,
    ExpertCreateComponent,
    ExpertIndexComponent,
    ExpertShowComponent,
    ExpertEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
