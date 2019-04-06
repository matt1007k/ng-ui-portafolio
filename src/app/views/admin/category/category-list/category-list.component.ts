import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { CategoriesService } from "../../../../services/index.service";
import { Category } from "../../../../models/index.model";
import { CategoryCreateComponent } from "../category-create/category-create.component";
import { CategoryEditComponent } from "../category-edit/category-edit.component";
import { CategoryRemoveComponent } from "../category-remove/category-remove.component";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"]
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  desde: number = 0;
  total: number = 0;
  loading: boolean = false;

  constructor(
    private dialogService: NbDialogService,
    private _categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.loading = true;
    this._categoriesService.getAll(this.desde).subscribe((res: any) => {
      this.categories = res.categories;
      this.total = res.total;
      this.loading = false;
    });
  }

  searchCategory(title: string) {
    if (title.length <= 0) {
      this.loadCategories();
      return;
    }

    this.loading = true;
    this._categoriesService
      .searchCategory(title)
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.loading = false;
      });
  }

  changePage(value: number) {
    let desde = this.desde + value;

    if (desde >= this.total) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += value;
    this.loadCategories();
  }

  openWithBackdrop() {
    this.openAdd(true);
  }

  openWithoutBackdrop() {
    this.openAdd(false);
  }

  protected openAdd(closeOnBackdropClick: boolean) {
    this.dialogService
      .open(CategoryCreateComponent, {
        closeOnBackdropClick
      })
      .onClose.subscribe(category => category && this.loadCategories());
  }

  openEdit(category) {
    this.dialogService
      .open(CategoryEditComponent, {
        hasBackdrop: true,
        context: {
          title: category.title,
          description: category.description,
          _id: category._id
        }
      })
      .onClose.subscribe(category => category && this.loadCategories());
  }

  openRemove(category) {
    this.dialogService
      .open(CategoryRemoveComponent, {
        hasBackdrop: true,
        context: {
          _id: category._id
        }
      })
      .onClose.subscribe(category => category && this.loadCategories());
  }
}
