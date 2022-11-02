import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  newPatient = new Patient ();
  constructor(private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
      private router :Router,) { }

  ngOnInit(): void {
  }
  addPatient(){
      // console.log(this.newProduit);
      this.patientService.ajouterPatient(this.newPatient);
      this.router.navigate(['patients']);
      }

    }
