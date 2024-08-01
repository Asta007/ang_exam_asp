import { Component } from '@angular/core';
import { expertInterface } from 'src/app/Interfaces/expertInterface';
import { ExpertService } from 'src/app/services/expert.service';

@Component({
  selector: 'app-expert-index',
  templateUrl: './expert-index.component.html',
  styleUrls: ['./expert-index.component.css']
})
export class ExpertIndexComponent {

  experts : expertInterface[] = [];  

  ngOnInit(){
    this.read();
  }

  constructor(private expertervice : ExpertService ){

  }

  read(){
    return this.expertervice.read().subscribe({
      next : (resp :expertInterface[]) => {
        // this.experts = resp;
        // console.log (resp);
      }
    })
  }

}
