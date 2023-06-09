import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ObjectComponent } from './components/object/object.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'object/:id', component: ObjectComponent},
  { path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
