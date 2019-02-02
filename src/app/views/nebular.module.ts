import { NgModule } from '@angular/core';
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
    NbBadgeModule
} from '@nebular/theme';

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
    NbBadgeModule
]


@NgModule({
    imports: [
        ...componentsNb, 
        NbSidebarModule.forRoot(), 
        NbMenuModule.forRoot(),
        NbDatepickerModule.forRoot()
    ],
    exports: [
        ...componentsNb, 
        NbSidebarModule, 
        NbMenuModule,
        NbDatepickerModule
    ],
    declarations: []
})

export class NebularModule {}