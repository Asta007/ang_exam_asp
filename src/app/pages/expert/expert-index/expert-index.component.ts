import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private expertervice : ExpertService, private router:Router ){

  }

  read(){
    return this.expertervice.read().subscribe({
      next : (resp :expertInterface[]) => {
        this.experts = resp;
        // console.log (resp);
      }
    })
  }

  delete(id?:string){
    this.expertervice.delete(id).subscribe({
      next:()=>{this.ngOnInit()}
    })
  }

}
