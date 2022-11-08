import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import { PublicationsService } from '../publications.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

        form2=new FormGroup({
         titre: new FormControl('',[Validators.required]),
         description:new FormControl('',[Validators.required]),
         categorie: new FormControl('',[Validators.required]),
         date: new FormControl('',[Validators.required]),
        }
        );
        
      publications = [];
      stored_pub= JSON.parse(localStorage.getItem("stored_pub")||'{}');
        
      constructor(private publicationService: PublicationsService){
        this.publications = publicationService.getPublications(); }
    
      ngOnInit() {
      }
      hide = true;
      
      onSubmit(){
        if(!this.form2.valid) {return;}
        this.publicationService.addPublication(this.form2.value);
        this.stored_pub.push(this.form2.value);
        localStorage.setItem("stored_pub", JSON.stringify(this.stored_pub));
        localStorage.setItem("current_pub",JSON.stringify(this.form2.value));
      }
    }
    
  
