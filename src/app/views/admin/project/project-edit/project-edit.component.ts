import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NbDialogRef, NbToastrService } from "@nebular/theme";

import {
  CategoriesService,
  ProjectsService
} from "../../../../services/index.service";

import { Project } from "../../../../models/index.model";
import { NbToastStatus } from "@nebular/theme/components/toastr/model";

@Component({
  selector: "app-project-edit",
  templateUrl: "./project-edit.component.html",
  styles: []
})
export class ProjectEditComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Input() categoryId: string;

  categories: any;

  form: FormGroup;

  constructor(
    private ref: NbDialogRef<ProjectEditComponent>,
    private nbToastrService: NbToastrService,
    private _categoriesService: CategoriesService,
    private _projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.form = new FormGroup({
      categoryId: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });

    this.form.setValue({
      categoryId: this.categoryId,
      title: this.title,
      description: this.description
    });
  }

  loadCategories() {
    this._categoriesService.getAllByTitle().subscribe((res: any) => {
      this.categories = res.categories;
    });
  }

  get f() {
    return this.form.controls;
  }

  updateProject() {
    if (this.form.invalid) return;

    let project = new Project(
      this.form.value.title,
      this.form.value.description,
      null,
      null,
      this.form.value.categoryId
    );

    let status: NbToastStatus = NbToastStatus.SUCCESS;

    this._projectsService
      .updateProject(project, this.id)
      .subscribe((res: any) => {
        this.nbToastrService.show(status, "Project updated successfully", {
          status
        });
        this.ref.close(res.project);
      });
  }

  cancel() {
    this.ref.close();
  }
}
