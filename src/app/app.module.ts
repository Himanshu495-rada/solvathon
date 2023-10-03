import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    TeamComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: "", redirectTo: "/home", pathMatch: "full"},
      {path: "home", component: HomeComponent},
      {path: "contact", component: ContactComponent},
      {path: "team", component: TeamComponent},
      {path: "features", component: FeaturesComponent},
      {path: "tutorial", component: TutorialComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
