import { Component, OnInit, Input } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";

import { ServicesService } from "../../../../services/index.service";
import { NbToastStatus } from "@nebular/theme/components/toastr/model";

@Component({
  selector: "app-service-remove",
  templateUrl: "./service-remove.component.html",
  styleUrls: ["./service-remove.component.scss"]
})
export class ServiceRemoveComponent implements OnInit {
  @Input() _id: string;

  constructor(
    private ref: NbDialogRef<ServiceRemoveComponent>,
    private _servicesService: ServicesService,
    private _nbToastrService: NbToastrService
  ) {}

  ngOnInit() {}

  deleteService() {
    const status: NbToastStatus = NbToastStatus.SUCCESS;
    this._servicesService.deleteService(this._id).subscribe((res: any) => {
      this._nbToastrService.show(status, "Service delete successfully", {
        status
      });
      this.ref.close(res.message);
    });
  }

  cancel() {
    this.ref.close();
  }
}
