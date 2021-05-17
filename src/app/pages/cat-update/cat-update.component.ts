import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/models/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-update',
  templateUrl: './cat-update.component.html',
  styleUrls: ['./cat-update.component.css']
})
export class CatUpdateComponent implements OnInit {

  catForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private catService : CatService,
    private route : ActivatedRoute,
    private router : Router
    ) {
      // console.log("const formulaire")
      this.catForm = this.fb.group({
        nom:'',
        age:0,
        race:'',
        vivant:true,
        id:0
      });
    }

   ngOnInit() {   
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.catService.findById(id).subscribe(data => {
        this.catForm.setValue(data);
      });
    });
  }

  update(){
    // console.log(this.catForm.value.id)
    this.catService.update(
      this.catForm.value
    ).subscribe(cat => {
      this.router.navigate([`/cats/${cat.id}`]);
    });
  }
}
