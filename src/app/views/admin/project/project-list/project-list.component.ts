import { Component, OnInit } from "@angular/core";

import { NbDialogService } from "@nebular/theme";
import { ProjectsService } from "../../../../services/index.service";
import { Project } from "../../../../models/index.model";
import { ProjectCreateComponent } from "../project-create/project-create.component";
import { ProjectEditComponent } from "../project-edit/project-edit.component";
import { ProjectRemoveComponent } from "../project-remove/project-remove.component";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styles: []
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  desde: number = 0;
  total: number = 0;
  loading: boolean = false;

  constructor(
    private nbDialogService: NbDialogService,
    private _projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.loading = true;
    this._projectsService.getAll(this.desde).subscribe((res: any) => {
      this.loading = false;
      this.projects = res.projects;
      this.total = res.total;
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
    this.loadProjects();
  }

  searchProject(search: string) {
    if (search.length <= 0) {
      this.loadProjects();
    }
    this.loading = true;
    this._projectsService
      .searchProject(search)
      .subscribe((projects: Project[]) => {
        this.loading = false;
        this.projects = projects;
      });
  }

  openAdd() {
    this.nbDialogService
      .open(ProjectCreateComponent, { hasBackdrop: true })
      .onClose.subscribe(project => project && this.loadProjects());
  }

  openEdit(project) {
    this.nbDialogService
      .open(ProjectEditComponent, {
        context: {
          id: project._id,
          title: project.title,
          description: project.description,
          categoryId: project.category._id
        }
      })
      .onClose.subscribe(project => project && this.loadProjects());
  }

  openRemove(project) {
    this.nbDialogService
      .open(ProjectRemoveComponent, {
        context: { id: project._id }
      })
      .onClose.subscribe(message => message && this.loadProjects());
  }
}
