import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LocationStrategy } from '@angular/common';

@Component({
	selector: 'app-default-header',
	templateUrl: './default-header.component.html',
	styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent {
	@Input() pageTitle: string | undefined;
	@Input() btnAjuda: boolean = true;
	@Input() btnVoltar: boolean = true;
	@Input() btnDownload: boolean = false;
	@Output() downloadClicked = new EventEmitter();

	constructor(private popoverController: PopoverController, public location: LocationStrategy) { }

	voltar() {
		this.location.historyGo(-1);
	}
}
