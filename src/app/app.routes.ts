import { Routes } from '@angular/router';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';
import { First } from './first/first';
import { Second } from './second/second';
import { Third } from './third/third';


export const routes: Routes = [
{path:"" , redirectTo:"first" , pathMatch:'full'},
{path:"first", component:First , title:"عدسة - عالم التصوير"},
{path:"second", component:Second , title:"عدسة - عالم التصوير"},
{path:"third", component:Third , title:"عدسة - عالم التصوير"},
{path:"**", component: First}
];
