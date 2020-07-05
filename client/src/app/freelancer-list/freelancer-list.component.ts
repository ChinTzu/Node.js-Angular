import { Component, OnInit } from '@angular/core';
import { Freelancer } from '../shared/freelancer.model';
import { FreelancerService } from '../shared/freelancer.service';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.css'],
})
export class FreelancerListComponent implements OnInit {
  constructor(public service: FreelancerService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data: Freelancer[]) => {
      this.service.freelancerList = data;
    });
  }

  show(freelancer: Freelancer) {
    this.service.freelancer = Object.assign({}, freelancer);
    this.service.edit = false;
  }

  onEdit(freelancer: Freelancer) {
    this.service.freelancer = Object.assign({}, freelancer);
    this.service.edit = true;
  }

  onDelete(id: string) {
    console.log(id);
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.delete(id).subscribe((res) => {
        this.service.getAll().subscribe((data: Freelancer[]) => {
          this.service.freelancerList = data;
        });
      });
    }
  }
}
