import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { FreelancerListComponent } from './freelancer-list/freelancer-list.component';
import { FreelancerService } from './shared/freelancer.service';

@NgModule({
  declarations: [AppComponent, FreelancerComponent, FreelancerListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [FreelancerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
