import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NbDialogRef, NbToastrService } from "@nebular/theme";

import { CategoriesService } from "../../../../services/index.service";
import { Category } from "../../../../models/index.model";
import { NbToastStatus } from "@nebular/theme/components/toastr/model";

@Component({
  selector: "app-category-edit",
  templateUrl: "./category-edit.component.html",
  styleUrls: ["./category-edit.component.scss"]
})
export class CategoryEditComponent implements OnInit {
  @Input() _id: string;
  @Input() title: string;
  @Input() description: string;

  form: FormGroup;
  constructor(
    private ref: NbDialogRef<CategoryEditComponent>,
    private _categoriesService: CategoriesService,
    private _nbToastrService: NbToastrService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });

    this.form.setValue({ title: this.title, description: this.description });
  }

  get f() {
    return this.form.controls;
  }

  updateCategory() {
    if (this.form.invalid) {
      return;
    }

    const category = new Category(
      this.form.value.title,
      this.form.value.description
    );

    const status: NbToastStatus = NbToastStatus.SUCCESS;

    this._categoriesService
      .updateCategory(category, this._id)
      .subscribe((res: any) => {
        this._nbToastrService.show(status, "Category updated successfully", {
          status
        });
        this.ref.close(res.category);
      });
  }

  cancel() {
    this.ref.close();
  }
}
