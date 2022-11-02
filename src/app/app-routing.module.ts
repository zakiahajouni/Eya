import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component'
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  {path: "patients", component : PatientsComponent},
  {path: "add-patient", component : AddPatientComponent},
  { path: "", redirectTo: "patients", pathMatch: "full" },
  {path: "updatePatient/:id", component: UpdatePatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
