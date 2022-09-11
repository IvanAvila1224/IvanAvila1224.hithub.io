import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationAndCompetencesComponent } from './education-and-competences/education-and-competences.component';

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    WorkExperienceComponent,
    EducationAndCompetencesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
