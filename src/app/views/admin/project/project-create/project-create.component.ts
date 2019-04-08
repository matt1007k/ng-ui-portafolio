import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { NbDialogRef, NbToastrService } from "@nebular/theme";

import {
  CategoriesService,
  ProjectsService
} from "../../../../services/index.service";

import { Project } from "../../../../models/index.model";
import { NbToastStatus } from "@nebular/theme/components/toastr/model";

@Component({
  selector: "app-project-create",
  templateUrl: "./project-create.component.html",
  styles: []
})
export class ProjectCreateComponent implements OnInit {
  form: FormGroup;
  categories: any;

  constructor(
    private ref: NbDialogRef<ProjectCreateComponent>,
    private _nbToastrService: NbToastrService,
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
  }

  loadCategories() {
    this._categoriesService.getAllByTitle().subscribe((res: any) => {
      this.categories = res.categories;
    });
  }

  get f() {
    return this.form.controls;
  }

  createProject() {
    if (this.form.invalid) return;
    let project = new Project(
      this.form.value.title,
      this.form.value.description,
      null,
      null,
      this.form.value.categoryId
    );

    let status: NbToastStatus = NbToastStatus.SUCCESS;

    this._projectsService.createProject(project).subscribe((res: any) => {
      this._nbToastrService.show(status, "Project created successfully", {
        status
      });
      this.ref.close(res.project);
    });
  }

  cancel() {
    this.ref.close();
  }
}
