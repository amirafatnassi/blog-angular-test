import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  publications:any=[];
  constructor() { }

  getPublications(){
    return this.publications;
  }

  addPublication(pub:any){
    this.publications.push(pub);
  }
}
