import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LocationStrategy } from '@angular/common';

interface Navbar {
	loc
}

@Component({
	selector: 'app-default-header',
	templateUrl: './default-header.component.html',
	styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent {

	constructor(private popoverController: PopoverController, public location: LocationStrategy) { }

}
