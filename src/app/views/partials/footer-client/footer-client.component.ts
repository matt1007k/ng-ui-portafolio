import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-footer-client",
  templateUrl: "./footer-client.component.html",
  styleUrls: ["./footer-client.component.scss"]
})
export class FooterClientComponent implements OnInit {
  @Input() anio: string;
  constructor() {}

  ngOnInit() {}
}
