import { NgModule } from "@angular/core";
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';


import { Routes, RouterModule } from '@angular/router';

import { LandingV6Component } from './landing-v6/landing-v6.component';

import { DemosComponent } from './components/demos/demos.component';
import { AllFaqsComponent } from "./components/all-faqs/all-faqs.component";
import { AboutComponent } from "./components/about/about.component";
import { CareerComponent } from "./components/career/career.component";
import { PartnerComponent } from "./components/partner/partner.component";
import { SupportComponent } from "./components/support/support.component";
import { SocialLandingComponent } from "./components/social-landing/social-landing.component";
import { AllServicesComponent } from "./components/all-services/all-services.component";
import { GalleryComponent } from "./components/gallery/gallery.component";


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
        path: "all-faqs",
        component: AllFaqsComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "career",
        component: CareerComponent
    },
    {
        path: "partner",
        component: PartnerComponent
    },
    {
        path: "support",
        component: SupportComponent
    },
    {
        path: "social",
        component: SocialLandingComponent
    },
    {
        path: "services",
        component: AllServicesComponent
    },
    {
        path: "gallery",
        component: GalleryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
