import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-production-units',
	templateUrl: './production-units.page.html',
	styleUrls: [ './production-units.page.scss' ]
})
export class ProductionUnitsPage implements OnInit {
	units: Array<any>;

	constructor() {}

	ngOnInit(): void {
		this.units = [ 1, 2, 3, 4, 5];
	}
}
