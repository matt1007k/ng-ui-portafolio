import { Component, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NbToastStatus } from "@nebular/theme/components/toastr/model";

import { CategoriesService } from "../../../../services/index.service";
import { Category } from "../../../../models/index.model";

@Component({
  selector: "app-category-create",
  templateUrl: "./category-create.component.html",
  styleUrls: ["./category-create.component.scss"]
})
export class CategoryCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    protected ref: NbDialogRef<CategoryCreateComponent>,
    private _categoriesService: CategoriesService,
    private _nbToastrService: NbToastrService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  createCategory() {
    if (this.form.invalid) {
      return;
    }
    const category = new Category(
      this.form.value.title,
      this.form.value.description
    );
    // const position: NbGlobalPosition = NbGlobalLogicalPosition.TOP_END;
    const status: NbToastStatus = NbToastStatus.SUCCESS;

    this._categoriesService.createCategory(category).subscribe((res: any) => {
      this._nbToastrService.show(status, "Category created successfully", {
        status
      });
      this.ref.close(res.category);
    });
  }

  cancel() {
    this.ref.close();
  }
}
