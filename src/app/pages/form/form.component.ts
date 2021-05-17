import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  catForm : FormGroup
  
  constructor(
    private fb : FormBuilder,
    private service : CatService,
    private router : Router
    ) { 
      this.catForm = this.fb.group({
        nom:[''],
        race: [''],
        age: [0],
        vivant: [false]
      })
    }

  ngOnInit(): void {
  }

  save(){
    let cat = this.catForm.value;
    this.service.create(cat).subscribe(cat => {
      this.router.navigate([`/cats/${cat.id}`]);
    });
  }

}
