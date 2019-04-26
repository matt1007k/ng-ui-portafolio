import { Component, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NbToastStatus } from "@nebular/theme/components/toastr/model";

import { ServicesService } from "../../../../services/index.service";
import { Service } from "../../../../models/index.model";

@Component({
  selector: "app-service-create",
  templateUrl: "./service-create.component.html",
  styleUrls: ["./service-create.component.scss"]
})
export class ServiceCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    protected ref: NbDialogRef<ServiceCreateComponent>,
    private _servicesService: ServicesService,
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

  createService() {
    if (this.form.invalid) {
      return;
    }
    const service = new Service(
      this.form.value.title,
      this.form.value.description
    );
    // const position: NbGlobalPosition = NbGlobalLogicalPosition.TOP_END;
    const status: NbToastStatus = NbToastStatus.SUCCESS;

    this._servicesService.createService(service).subscribe((res: any) => {
      this._nbToastrService.show(status, "Service created successfully", {
        status
      });
      this.ref.close(res.service);
    });
  }

  cancel() {
    this.ref.close();
  }
}
