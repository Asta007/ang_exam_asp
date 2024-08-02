import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { expertInterface } from 'src/app/Interfaces/expertInterface';
import { ExpertService } from 'src/app/services/expert.service';

@Component({
  selector: 'app-expert-show',
  templateUrl: './expert-show.component.html',
  styleUrls: ['./expert-show.component.css']
})
export class ExpertShowComponent {

  expert? : expertInterface ;  
  constructor(private expertervice : ExpertService , private route:ActivatedRoute){
  }

  ngOnInit(){
    var id:string = this.route.snapshot.params['id'];
    this.show(id);
    console.log(id);
  }

  show(id:string){
    return this.expertervice.show(id).subscribe(
      data => {this.expert = data}
    )
  }
}
