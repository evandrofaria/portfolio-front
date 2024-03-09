import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DefaultHeaderComponent } from './default-header/default-header.component';

const COMPONENTS: any = [
	DefaultHeaderComponent,
];

@NgModule({
	declarations: [COMPONENTS],
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterLink,
	],
	exports: [COMPONENTS],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {

}
