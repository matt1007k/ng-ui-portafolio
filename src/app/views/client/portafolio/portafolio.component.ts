import { Component, OnInit } from "@angular/core";
// import { Lightbox } from "ngx-lightbox";

import { fader } from "./item-animation";

@Component({
  selector: "app-portafolio",
  templateUrl: "./portafolio.component.html",
  styleUrls: ["./portafolio.component.scss"],
  animations: [fader]
})
export class PortafolioComponent implements OnInit {
  private _projects: any = [];
  constructor() // private _lightbox: Lightbox
  {}

  ngOnInit() {}

  prepareProject() {}

  open(index: number): void {
    // open lightbox
    // this._lightbox.open(this._projects, index);
  }

  close(): void {
    // close lightbox programmatically
    // this._lightbox.close();
  }
}
