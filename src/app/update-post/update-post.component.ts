import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { PublicationsService } from '../publications.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  
      form2=new FormGroup({
        titre: new FormControl('',[Validators.required]),
        author: new FormControl('',[Validators.required]),
        description:new FormControl('',[Validators.required]),
        categorie: new FormControl('',[Validators.required]),
        date: new FormControl('',[Validators.required]),
       }
       );
        publications = [];
        x:number=0;
        constructor(private pubService: PublicationsService, private route: ActivatedRoute){
          }
     
         ngOnInit(){
           this.publications=JSON.parse(localStorage.getItem("stored_pub")||'{}');
           this.route.paramMap.subscribe(param => {
           let i :number= param.get('i');
           console.log(this.form2.value);
           this.form2.controls['titre'].setValue(this.publications[i].titre);
           this.form2.controls['description'].setValue(this.publications[i].description);
           this.form2.controls['author'].setValue(this.publications[i].author);
           this.form2.controls['date'].setValue(this.publications[i].date);
           this.x=i;
            });
       }
       
       hide = true;
     
       edit(){
       this.publications[this.x]!=this.form2.value;
       localStorage.setItem("stored_pub", JSON.stringify(this.publications));
       }
    
    
    }
  
