import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../publications.service'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {  
    
      recherche="";
      publications = [];
      publicationsToFilter=[];
      constructor(private publicationService: PublicationsService)
      {  }
    
      ngOnInit() {
        this.publications=JSON.parse(localStorage.getItem("stored_pub")||'{}');
        this.publicationsToFilter = [...this.publications];
      }

      supprimer(i:number){
        this.publications.splice(i,1);
        localStorage.setItem("stored_pub", JSON.stringify(this.publications));
      }
    }
  