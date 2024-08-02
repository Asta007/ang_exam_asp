import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { expertInterface } from 'src/app/Interfaces/expertInterface';
import { ExpertService } from 'src/app/services/expert.service';

@Component({
  selector: 'app-expert-create',
  templateUrl: './expert-create.component.html',
  styleUrls: ['./expert-create.component.css']
})

export class ExpertCreateComponent {
  
  public nom:string = "";
  public prenom:string = "";
  public login:string = "";
  public spec:string = "";
  public type:string = ""

  constructor(private experService : ExpertService, private router:Router){

  }

  datalist : string[] = [
    "Développeur Backend", "Développeur Frontend", "Ingénieur en Intelligence Artificielle", "Ingénieur en Machine Learning", "Data Scientist", "Analyste de Données", "Ingénieur en Cybersécurité", "Architecte Cloud", "Ingénieur DevOps", "Ingénieur Réseaux et Systèmes", "Administrateur Système", "Consultant en Sécurité Informatique", "Concepteur UX/UI", "Chef de Projet Informatique", "Développeur Mobile", "Ingénieur en Systèmes Embarqués", "Ingénieur en Réalité Augmentée", "Ingénieur en Blockchain", "Ingénieur en Big Data", "Architecte Logiciel", "Développeur Full Stack", "Gestionnaire de Projet Agile", "Consultant en Transformations Numériques", "Ingénieur en Systèmes Distribués", "Ingénieur en IoT (Internet des Objets)", "Ingénieur en Robotique", "Expert en Performance Web", "Spécialiste en Automatisation des Tests", "Ingénieur en Réseaux Sans Fil", "Développeur de Jeux Vidéo", "Consultant en Architecture de Réseaux", "Analyste Fonctionnel", "Ingénieur en Informatique Quantique", "Responsable de la Sécurité des Systèmes d'Information", "Ingénieur en Systèmes de Base de Données", "Spécialiste en Interaction Homme-Machine", "Architecte en Infrastructure Cloud", "Ingénieur en Informatique Théorique", "Expert en Analyse des Risques IT", "Développeur en Technologies Web Avancées", "Consultant en Gestion de la Continuité des Activités", "Gestionnaire de Portefeuille de Projets", "Ingénieur en Traitement du Langage Naturel", "Responsable des Opérations IT", "Analyste de Sécurité des Systèmes d'Information", "Développeur en Cloud Computing", "Ingénieur en Développement de Logiciels embarqués"
  ];

  save(){
    var expert:expertInterface = {
      nom: this.nom,
      prenom: this.prenom,
      login: this.login,
      specialite: this.spec,
      discriminator: this.type
    }
    
    this.experService.store(expert).subscribe({
      next : (res : any) => {
      console.log(res)
      this.router.navigate(['/expert']);
    },
    error : (err : any) => {
      console.log(err)
    },})
  }


}
