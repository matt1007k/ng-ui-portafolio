import { NgModule } from "@angular/core";
import {
  NbLayoutModule,
  NbCardModule,
  NbSidebarModule,
  NbMenuModule,
  NbCheckboxModule,
  NbActionsModule,
  NbContextMenuModule,
  NbSearchModule,
  NbPopoverModule,
  NbListModule,
  NbUserModule,
  NbInputModule,
  NbButtonModule,
  NbRadioModule,
  NbSelectModule,
  NbDatepickerModule,
  NbBadgeModule,
  NbTabsetModule,
  NbTooltipModule,
  NbDialogModule,
  NbSpinnerModule,
  NbToastrModule
} from "@nebular/theme";

const componentsNb = [
  NbLayoutModule,
  NbCardModule,
  NbCheckboxModule,
  NbActionsModule,
  NbContextMenuModule,
  NbSearchModule,
  NbPopoverModule,
  NbUserModule,
  NbListModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbRadioModule,
  NbSelectModule,
  NbBadgeModule,
  NbTabsetModule,
  NbTooltipModule,
  NbSpinnerModule
];

@NgModule({
  imports: [
    ...componentsNb,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot()
  ],
  exports: [...componentsNb, NbSidebarModule, NbMenuModule, NbDatepickerModule]
})
export class NebularModule {}
