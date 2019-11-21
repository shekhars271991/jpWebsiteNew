
import { ScrollToDirective } from './helpers/scrollTo.directives';
import { WINDOW_PROVIDERS } from './helpers/window.helpers';
import { NgModule } from '@angular/core';
// import { NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from "@ngu/carousel";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingV1Component } from './landing-v1/landing-v1.component';
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
import { LandingV2Component } from './landing-v2/landing-v2.component';
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
import { LandingV3Component } from './landing-v3/landing-v3.component';
import { IntroFourComponent } from './components/intro-four/intro-four.component';
import { LandingV4Component } from './landing-v4/landing-v4.component';
import { IntroFiveComponent } from './components/intro-five/intro-five.component';
import { LandingV5Component } from './landing-v5/landing-v5.component';
import { LandingV6Component } from './landing-v6/landing-v6.component';
import { IntroSixComponent } from './components/intro-six/intro-six.component';
import { IntroSevenComponent } from './components/intro-seven/intro-seven.component';
import { LandingV7Component } from './landing-v7/landing-v7.component';
import { IntroEightComponent } from './components/intro-eight/intro-eight.component';
import { LandingV8Component } from './landing-v8/landing-v8.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderWhiteComponent } from './components/header-white/header-white.component';
import { IntroNineComponent } from './components/intro-nine/intro-nine.component';
import { LandingV9Component } from './landing-v9/landing-v9.component';
import { IntroTenComponent } from './components/intro-ten/intro-ten.component';
import { LandingV10Component } from './landing-v10/landing-v10.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DemosComponent } from './components/demos/demos.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { IntroElevenComponent } from './components/intro-eleven/intro-eleven.component';
import { LandingV11Component } from './landing-v11/landing-v11.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    NguCarouselModule,
    NgbModule,

    FormsModule
  ],
  declarations: [
    LandingV1Component,
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
    LandingV2Component,
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
    LandingV3Component,
    IntroFourComponent,
    LandingV4Component,
    IntroFiveComponent,
    LandingV5Component,
    LandingV6Component,
    IntroSixComponent,
    IntroSevenComponent,
    LandingV7Component,
    IntroEightComponent,
    LandingV8Component,
    HeaderComponent,
    ScrollToDirective,
    HeaderWhiteComponent,
    IntroNineComponent,
    LandingV9Component,
    IntroTenComponent,
    LandingV10Component,
    DemosComponent,
    BlogDetailsComponent,
    BlogDetailsPageComponent,
    IntroElevenComponent,
    LandingV11Component,

  ],
  providers: [WINDOW_PROVIDERS]

  // exports: ScrollToDirective
})
export class LandingModule {}
