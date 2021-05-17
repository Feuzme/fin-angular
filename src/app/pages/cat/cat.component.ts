import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/models/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  cat : Cat;

  constructor(
    private service : CatService,
    private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit(): void {
    let id = this.route.paramMap.subscribe(params => {
      this.service.findById(params.get('id')).subscribe(data => {
        this.cat = data;
      });
    });
  }

  delete(){
    this.service.delete(this.cat.id).subscribe(data => {
      this.router.navigate(['/cats']);
    });
  }
}
