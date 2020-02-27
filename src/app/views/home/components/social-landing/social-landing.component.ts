import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { GOOGLE_PLAY_URL, APP_STORE_URL } from 'src/environments/environment';

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
  openPlayStore() {
    window.open(GOOGLE_PLAY_URL, "_blank");

  }
  openAppStore() {
    window.open(APP_STORE_URL, "_blank");
  }
}
