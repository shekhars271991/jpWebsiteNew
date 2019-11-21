import { NgModule } from "@angular/core";
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';


import { Routes, RouterModule } from '@angular/router';

import { LandingV6Component } from './landing-v6/landing-v6.component';

import { DemosComponent } from './components/demos/demos.component';


const routes: Routes = [
    {
        path: '',
        component: LandingV6Component
    },
    {
        path: "blog-details",
        component: BlogDetailsPageComponent
    },
    {
        path: "demos",
        component: DemosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
