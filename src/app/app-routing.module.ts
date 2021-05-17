import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatUpdateComponent } from './pages/cat-update/cat-update.component';
import { CatComponent } from './pages/cat/cat.component';
import { CatsComponent } from './pages/cats/cats.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {path:"signup", component: FormComponent},
  {path:"cats", component: CatsComponent},
  {path:"cats/:id", component: CatComponent},
  {path:"cats/:id/update", component: CatUpdateComponent},


  {path:"", component: CatsComponent},
  {path:"**", component: CatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
