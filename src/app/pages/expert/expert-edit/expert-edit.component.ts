import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { expertInterface } from 'src/app/Interfaces/expertInterface';
import { ExpertService } from 'src/app/services/expert.service';
import { ExpertCreateComponent } from '../expert-create/expert-create.component';

@Component({
  selector: 'app-expert-edit',
  templateUrl: './expert-edit.component.html',
  styleUrls: ['./expert-edit.component.css']
})
export class ExpertEditComponent {

  expert?:expertInterface

  constructor(private experService : ExpertService, private router:Router, private route:ActivatedRoute){}

  datalist : string[] = [
    "Développeur Backend", "Développeur Frontend", "Ingénieur en Intelligence Artificielle", "Ingénieur en Machine Learning", "Data Scientist", "Analyste de Données", "Ingénieur en Cybersécurité", "Architecte Cloud", "Ingénieur DevOps", "Ingénieur Réseaux et Systèmes", "Administrateur Système", "Consultant en Sécurité Informatique", "Concepteur UX/UI", "Chef de Projet Informatique", "Développeur Mobile", "Ingénieur en Systèmes Embarqués", "Ingénieur en Réalité Augmentée", "Ingénieur en Blockchain", "Ingénieur en Big Data", "Architecte Logiciel", "Développeur Full Stack", "Gestionnaire de Projet Agile", "Consultant en Transformations Numériques", "Ingénieur en Systèmes Distribués", "Ingénieur en IoT (Internet des Objets)", "Ingénieur en Robotique", "Expert en Performance Web", "Spécialiste en Automatisation des Tests", "Ingénieur en Réseaux Sans Fil", "Développeur de Jeux Vidéo", "Consultant en Architecture de Réseaux", "Analyste Fonctionnel", "Ingénieur en Informatique Quantique", "Responsable de la Sécurité des Systèmes d'Information", "Ingénieur en Systèmes de Base de Données", "Spécialiste en Interaction Homme-Machine", "Architecte en Infrastructure Cloud", "Ingénieur en Informatique Théorique", "Expert en Analyse des Risques IT", "Développeur en Technologies Web Avancées", "Consultant en Gestion de la Continuité des Activités", "Gestionnaire de Portefeuille de Projets", "Ingénieur en Traitement du Langage Naturel", "Responsable des Opérations IT", "Analyste de Sécurité des Systèmes d'Information", "Développeur en Cloud Computing", "Ingénieur en Développement de Logiciels embarqués"
  ];

  ngOnInit(){
    var id:string = this.route.snapshot.params['id'];
    console.log(id);
    this.retrieve(id);
  }

  retrieve(id:string){
    this.experService.show(id).subscribe(data=>{
      this.expert = data;
    })
  }

  update(){
    if(this.expert){
      this.experService.update(this.expert).subscribe({
        next : (res => {
          console.log(res);
          this.router.navigate(["/expert/"]);
        }),
        error : (err => {console.log(err)})
      })
    }
  }
}
