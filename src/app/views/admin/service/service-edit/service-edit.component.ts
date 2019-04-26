import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NbDialogRef, NbToastrService } from "@nebular/theme";

import { ServicesService } from "../../../../services/index.service";
import { Service } from "../../../../models/index.model";
import { NbToastStatus } from "@nebular/theme/components/toastr/model";

@Component({
  selector: "app-service-edit",
  templateUrl: "./service-edit.component.html",
  styles: []
})
export class ServiceEditComponent implements OnInit {
  @Input() _id: string;
  @Input() title: string;
  @Input() description: string;

  form: FormGroup;
  constructor(
    private ref: NbDialogRef<ServiceEditComponent>,
    private _ServiceService: ServicesService,
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

  updateService() {
    if (this.form.invalid) {
      return;
    }

    const service = new Service(
      this.form.value.title,
      this.form.value.description
    );

    const status: NbToastStatus = NbToastStatus.SUCCESS;

    this._ServiceService
      .updateService(service, this._id)
      .subscribe((res: any) => {
        this._nbToastrService.show(status, "Service updated successfully", {
          status
        });
        this.ref.close(res.service);
      });
  }

  cancel() {
    this.ref.close();
  }
}
