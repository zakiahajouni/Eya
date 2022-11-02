import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { ActivatedRoute,Router } from '@angular/router';
import { PatientService } from '../services/patient.service';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  currentPatient = new Patient();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private patientService: PatientService) { }

  ngOnInit(): void {
    this.currentPatient = this.patientService.consulterPatient(this.activatedRoute.snapshot. params['id']);
console.log(this.currentPatient);
  }
  updatePatient()
  { //console.log(this.currentProduit);
  this.patientService.updatePatient(this.currentPatient);
  this.router.navigate(['patients']);
  }
}
