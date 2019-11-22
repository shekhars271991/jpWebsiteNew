import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from "src/app/shared/animations/shared-animations";

@Component({
  selector: 'app-all-faqs',
  templateUrl: './all-faqs.component.html',
  styleUrls: ['./all-faqs.component.scss'],
  animations: [SharedAnimations]
})
export class AllFaqsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
