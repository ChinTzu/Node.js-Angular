import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../shared/freelancer.service';
import { NgForm } from '@angular/forms';
import { Freelancer } from '../shared/freelancer.model';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css'],
})
export class FreelancerComponent implements OnInit {
  constructor(public service: FreelancerService) {}

  ngOnInit(): void {
    this.resetForm();
    this.service.edit = true;
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.freelancer = {
      _id: null,
      name: '',
      email: '',
      phone: '',
      skillsets: '',
      hobby: '',
    };
  }

  onFormSubmit(form: NgForm) {
    if (form.value._id == null) {
      console.log('create');
      this.create(form);
      this.service.edit = true;
    } else {
      console.log('update');
      this.update(form);
      this.service.edit = true;
    }
  }

  create(form: NgForm) {
    this.service.create(form.value).subscribe((res) => {
      this.resetForm(form);
      this.service.getAll().subscribe((data: Freelancer[]) => {
        this.service.freelancerList = data;
      });
    });
  }

  update(form: NgForm) {
    this.service.update(form.value).subscribe((res) => {
      this.resetForm(form);
      this.service.getAll().subscribe((data: Freelancer[]) => {
        this.service.freelancerList = data;
      });
    });
  }
}
