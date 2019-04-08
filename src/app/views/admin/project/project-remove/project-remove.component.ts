import { Component, OnInit, Input } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { ProjectsService } from "../../../../services/index.service";
import { NbToastStatus } from "@nebular/theme/components/toastr/model";

@Component({
  selector: "app-project-remove",
  templateUrl: "./project-remove.component.html",
  styles: []
})
export class ProjectRemoveComponent implements OnInit {
  @Input() id: string;
  constructor(
    private ref: NbDialogRef<ProjectRemoveComponent>,
    private nbToastrService: NbToastrService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {}

  deleteCategory() {
    let status: NbToastStatus = NbToastStatus.SUCCESS;

    this.projectsService.deleteProject(this.id).subscribe((res: any) => {
      this.nbToastrService.show(status, res.message, { status });
      this.ref.close(res.message);
    });
  }

  cancel() {
    this.ref.close();
  }
}
