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
  NbDialogModule
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
  NbTooltipModule
];

@NgModule({
  imports: [
    ...componentsNb,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot()
  ],
  exports: [...componentsNb, NbSidebarModule, NbMenuModule, NbDatepickerModule]
})
export class NebularModule {}
