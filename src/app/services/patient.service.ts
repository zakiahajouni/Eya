import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
@Injectable({
providedIn: 'root'
})
export class PatientService {
  patients! : Patient[]; 
  patient! : Patient;
  constructor() { 
    this.patients = [
      {idPatient : 1, nomPatient : "Albert", genderPatient : "MALE", birthDate: new Date("01/14/2011")},
      {idPatient : 2, nomPatient : "jULIA", genderPatient : "FEMALE", birthDate: new Date("03/22/1997")},
      {idPatient : 3, nomPatient : "SAM", genderPatient : "MALE", birthDate: new Date("03/22/1997")},
      {idPatient : 4, nomPatient : "SERRA", genderPatient : "FEMALE", birthDate: new Date("05/21/1970")},
      
    ];
  }
  listePatients():Patient[] {
    return this.patients;
}
ajouterPatient( pat: Patient){
  this.patients.push(pat);
  }
  supprimerPatient( pat: Patient){
    //supprimer le produit prod du tableau produits
    const index = this.patients.indexOf(pat, 0);
    if (index > -1) {
    this.patients.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }
    consulterPatient(id:number): Patient{
      this.patient = this.patients.find(p => p.idPatient == id)!;
      return this.patient;
      }
      updatePatient(p:Patient)
     {
     // console.log(p);
     this.supprimerPatient(p);
     this.ajouterPatient(p);
     this.trierPatients();
}
trierPatients(){
  this.patients = this.patients.sort((n1,n2) => {
  if (n1.idPatient! > n2.idPatient!) {
  return 1;
  }
  if (n1.idPatient! < n2.idPatient!) {
  return -1;
  }
  return 0;
  });
  }
  updateProduit(p:Patient)
  {
  // console.log(p);
  this.supprimerPatient(p);
  this.ajouterPatient(p);
  this.trierPatients();
  }

  }
