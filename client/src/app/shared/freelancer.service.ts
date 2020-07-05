import { Injectable } from '@angular/core';
import { Freelancer } from './freelancer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreelancerService {
  freelancerList: Freelancer[]; //pass between components
  edit: boolean;
  freelancer: Freelancer;
  readonly apiServer = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) {}

  getById(id): Observable<Freelancer> {
    return this.httpClient.get<Freelancer>(this.apiServer + '/freelance/' + id);
  }

  getAll(): Observable<Freelancer[]> {
    return this.httpClient.get<Freelancer[]>(this.apiServer + '/freelance/');
  }

  create(freelancer: Freelancer) {
    return this.httpClient.post(this.apiServer + '/freelance', freelancer);
  }

  update(formData: Freelancer) {
    console.log(formData._id);
    return this.httpClient.put(
      this.apiServer + '/freelance/' + formData._id,
      formData
    );
  }

  delete(id: string) {
    return this.httpClient.delete(this.apiServer + '/freelance/' + id);
  }
}
