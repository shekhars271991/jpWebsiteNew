
import { ScrollToDirective } from './helpers/scrollTo.directives';
import { WINDOW_PROVIDERS } from './helpers/window.helpers';
import { NgModule } from '@angular/core';
// import { NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from "@ngu/carousel";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { Intro1Component } from './components/intro1/intro1.component';
import { Intro2Component } from './components/intro2/intro2.component';
import { Works1Component } from './components/works1/works1.component';
import { Works2Component } from './components/works2/works2.component';
import { WorksCarouselComponent } from './components/works-carousel/works-carousel.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesCauroselComponent } from './components/services-caurosel/services-caurosel.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialCauroselComponent } from './components/testimonial-caurosel/testimonial-caurosel.component';
import { PricingOneComponent } from './components/pricing-one/pricing-one.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeaturesTwoComponent } from './components/features-two/features-two.component';
import { BestComponent } from './components/best/best.component';
import { LeftImageComponent } from './components/left-image/left-image.component';
import { RightImageComponent } from './components/right-image/right-image.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { NewsTwoComponent } from './components/news-two/news-two.component';
import { IntroThreeComponent } from './components/intro-three/intro-three.component';

import { IntroFourComponent } from './components/intro-four/intro-four.component';

import { IntroFiveComponent } from './components/intro-five/intro-five.component';

import { LandingV6Component } from './landing-v6/landing-v6.component';
import { IntroSixComponent } from './components/intro-six/intro-six.component';
import { IntroSevenComponent } from './components/intro-seven/intro-seven.component';

import { IntroEightComponent } from './components/intro-eight/intro-eight.component';

import { HeaderComponent } from './components/header/header.component';
import { HeaderWhiteComponent } from './components/header-white/header-white.component';
import { IntroNineComponent } from './components/intro-nine/intro-nine.component';

import { IntroTenComponent } from './components/intro-ten/intro-ten.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DemosComponent } from './components/demos/demos.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { IntroElevenComponent } from './components/intro-eleven/intro-eleven.component';
import { AboutComponent } from './components/about/about.component';
import { CareerComponent } from './components/career/career.component';
import { PartnerComponent } from './components/partner/partner.component';
import { SupportComponent } from './components/support/support.component';
import { SocialLandingComponent } from './components/social-landing/social-landing.component';
import { AllFaqsComponent } from './components/all-faqs/all-faqs.component';
import { SubPageHeaderComponent } from './components/sub-page-header/sub-page-header.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        NguCarouselModule,
        NgbModule,
        FormsModule
    ],
    declarations: [
        Intro1Component,
        Intro2Component,
        Works1Component,
        Works2Component,
        WorksCarouselComponent,
        ServicesComponent,
        ServicesCauroselComponent,
        TestimonialComponent,
        TestimonialCauroselComponent,
        PricingOneComponent,
        ContactFormComponent,
        FooterComponent,
        FeaturesComponent,
        FeaturesTwoComponent,
        BestComponent,
        LeftImageComponent,
        RightImageComponent,
        TeamComponent,
        NewsComponent,
        FaqsComponent,
        NewsTwoComponent,
        IntroThreeComponent,
        IntroFourComponent,
        IntroFiveComponent,
        LandingV6Component,
        IntroSixComponent,
        IntroSevenComponent,
        IntroEightComponent,
        HeaderComponent,
        ScrollToDirective,
        HeaderWhiteComponent,
        IntroNineComponent,
        IntroTenComponent,
        DemosComponent,
        BlogDetailsComponent,
        BlogDetailsPageComponent,
        IntroElevenComponent,
        AboutComponent,
        CareerComponent,
        PartnerComponent,
        SupportComponent,
        SocialLandingComponent,
        AllFaqsComponent,
        SubPageHeaderComponent,
        AllServicesComponent,
        GalleryComponent,
    ],
    providers: [WINDOW_PROVIDERS]

    // exports: ScrollToDirective
})
export class HomeModule { }
