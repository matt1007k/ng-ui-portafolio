import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ServicesService } from "../../../../services/index.service";
import { Service } from "../../../../models/index.model";
import { ServiceCreateComponent } from "../service-create/service-create.component";
import { ServiceEditComponent } from "../service-edit/service-edit.component";
import { ServiceRemoveComponent } from "../service-remove/service-remove.component";

@Component({
  selector: "app-service-list",
  templateUrl: "./service-list.component.html",
  styleUrls: ["./service-list.component.scss"]
})
export class ServiceListComponent implements OnInit {
  services: Service[] = [];
  desde: number = 0;
  total: number = 0;
  loading: boolean = false;

  constructor(
    private dialogService: NbDialogService,
    private _servicesService: ServicesService
  ) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.loading = true;
    this._servicesService.getAll(this.desde).subscribe((res: any) => {
      this.services = res.services;
      this.total = res.total;
      this.loading = false;
    });
  }

  searchService(title: string) {
    if (title.length <= 0) {
      this.loadServices();
      return;
    }

    this.loading = true;
    this._servicesService
      .searchService(title)
      .subscribe((services: Service[]) => {
        this.services = services;
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
    this.loadServices();
  }

  openWithBackdrop() {
    this.openAdd(true);
  }

  openWithoutBackdrop() {
    this.openAdd(false);
  }

  protected openAdd(closeOnBackdropClick: boolean) {
    this.dialogService
      .open(ServiceCreateComponent, {
        closeOnBackdropClick
      })
      .onClose.subscribe(service => service && this.loadServices());
  }

  openEdit(service) {
    this.dialogService
      .open(ServiceEditComponent, {
        hasBackdrop: true,
        context: {
          title: service.title,
          description: service.description,
          _id: service._id
        }
      })
      .onClose.subscribe(service => service && this.loadServices());
  }

  openRemove(service) {
    this.dialogService
      .open(ServiceRemoveComponent, {
        hasBackdrop: true,
        context: {
          _id: service._id
        }
      })
      .onClose.subscribe(service => service && this.loadServices());
  }
}
