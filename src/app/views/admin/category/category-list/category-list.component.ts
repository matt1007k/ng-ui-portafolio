import { Component, OnInit, TemplateRef } from "@angular/core";
import { NbDialogService } from "@nebular/theme";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"]
})
export class CategoryListComponent implements OnInit {
  fruits = ["Banana", "Lima", "Naranja", "Manzana"];
  constructor(private dialogService: NbDialogService) {}

  ngOnInit() {}

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: "this is some additional data passed to dialog"
    });
  }
}
