import { Component } from '@angular/core';
import { jeux_video } from 'src/app/Interfaces/jeuxVideoInterface';
import { JeuxVideoService } from 'src/app/services/jeux-video.service';

@Component({
  selector: 'app-jeux-video-index',
  templateUrl: './jeux-video-index.component.html',
  styleUrls: ['./jeux-video-index.component.css']
})
export class JeuxVideoIndexComponent {

  
  jeuxVideos : jeux_video []  = [];

  constructor(private jeuxVideoService : JeuxVideoService){
  }

  ngOnInit(): void {
    this.read();
  }

  read(){
    this.jeuxVideoService.read().subscribe({next:(response : jeux_video[])=>{
      this.jeuxVideos = response;
    }})
  }
}
