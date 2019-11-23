import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-social-landing',
  templateUrl: './social-landing.component.html',
  styleUrls: ['./social-landing.component.scss'],
  animations: [SharedAnimations]
})
export class SocialLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
