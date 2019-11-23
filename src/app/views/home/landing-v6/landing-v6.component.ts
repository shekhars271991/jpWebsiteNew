import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-landing-v6",
  templateUrl: "./landing-v6.component.html",
  styleUrls: ["./landing-v6.component.scss"]
})
export class LandingV6Component implements OnInit {
  backgroundColor = "landing-gradient-blue-red";
  showCustomizer = false;
  constructor() {}

  ngOnInit() {
    this.backgroundColor = "landing-gray";
  }

  changeBg(colorName) {
    console.log("jjj",colorName)
    this.backgroundColor = "landing-gray";
  }
  toggleCustomizer() {
    this.showCustomizer = !this.showCustomizer;
  }
}
