import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { CrudComponent } from './home/crud/crud.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { EditComponent } from './home/edit/edit.component';
const routes: Routes = [
  {
  	path : '', 
  	component : HomeComponent

  },
  {
  	path : 'signup', 
  component : HomeComponent
},
{
    path : 'crud', 
  component : CrudComponent
},
   {
   	path : 'contactus', 
   component : ContactusComponent
},
 {
     path : 'autocomplete', 
   component : AutocompleteComponent
},
{
  path : 'edituser', 
component : EditComponent
},
{
  path: 'customers',
  loadChildren: './customers/customers.module#CustomersModule'
},
// {
//   path:'',
//   redirectTo:'',
//   pathMatch:'full'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
