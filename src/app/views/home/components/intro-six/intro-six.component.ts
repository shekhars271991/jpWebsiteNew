import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';
import { GOOGLE_PLAY_URL, APP_STORE_URL } from 'src/environments/environment';

@Component({
  selector: 'app-intro-six',
  templateUrl: './intro-six.component.html',
  styleUrls: ['./intro-six.component.scss'],
  animations:[SharedAnimations]
})
export class IntroSixComponent implements OnInit {

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
