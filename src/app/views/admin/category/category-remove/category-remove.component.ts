import { Component, OnInit, Input } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";

import { CategoriesService } from "../../../../services/index.service";
import { NbToastStatus } from "@nebular/theme/components/toastr/model";

@Component({
  selector: "app-category-remove",
  templateUrl: "./category-remove.component.html",
  styleUrls: ["./category-remove.component.scss"]
})
export class CategoryRemoveComponent implements OnInit {
  @Input() _id: string;

  constructor(
    private ref: NbDialogRef<CategoryRemoveComponent>,
    private _categoriesService: CategoriesService,
    private _nbToastrService: NbToastrService
  ) {}

  ngOnInit() {}

  deleteCategory() {
    const status: NbToastStatus = NbToastStatus.SUCCESS;
    this._categoriesService.deleteCategory(this._id).subscribe((res: any) => {
      this._nbToastrService.show(status, "Category delete successfully", {
        status
      });
      this.ref.close(res.message);
    });
  }

  cancel() {
    this.ref.close();
  }
}
