import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
  Inject,
  Input
} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {WINDOW_PROVIDERS, WINDOW} from "../../helpers/window.helpers";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isFixed;
  public isCollapsed = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
     
    // if (offset > 0) {
    //   this.isFixed = true;
    // } else {
    //   this.isFixed = false;
    // }
    this.isFixed=true;
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
  hidemenu() {
    this.isCollapsed = true;
  }
}
