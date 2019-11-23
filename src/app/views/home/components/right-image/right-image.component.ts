import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig, NguCarouselStore } from "@ngu/carousel";
@Component({
  selector: "app-right-image",
  templateUrl: "./right-image.component.html",
  styleUrls: ["./right-image.component.scss"]
})
export class RightImageComponent implements OnInit {
  public carouselTileItems: Array<any> = [
    {
      // photo: "./assets/images/landing/app_screenshots/550/01.png"
      photo: "./assets/images/landing/svg/slider1.svg"
    },
    {
      photo: "./assets/images/landing/svg/slider2.svg"
      // photo: "./assets/images/landing/app_screenshots/550/02.png"
    },
    {
      photo: "./assets/images/landing/svg/slider3.svg"
      // photo: "./assets/images/landing/app_screenshots/550/03.png"
    },
    {
      photo: "./assets/images/landing/svg/slider4.svg"
      // photo: "./assets/images/landing/app_screenshots/550/04.png"
    },    
  ];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    load: 1,
    loop:true,
    velocity: 0,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)"
  };
  private isSelected:number;
  private counter:number;
  private isLeftButtonDisabled;
  private isRightButtonDisabled;
  

  constructor() {
    this.isSelected=1;
    this.counter=1; 
  
  }

  onmoveFn(data: NguCarouselStore) {   
    this.counter++;
    if(this.counter>4){
      this.counter=1;
    }
    //this.disableButton();
    this.isSelected=this.counter;   
  
  }
  setCounter(){
    this.counter-=2;
    if(this.counter<0){
      this.counter=3;
    }
    console.log("prev val");
  }

 
  ngOnInit() {
   
    
  }
}
