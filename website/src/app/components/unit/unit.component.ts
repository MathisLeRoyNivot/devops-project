import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-unit',
	templateUrl: './unit.component.html',
	styleUrls: [ './unit.component.scss' ]
})
export class UnitComponent implements OnInit {
	
	unit_id: any;
	automatons: Array<number>;
	

	constructor(private _Activatedroute:ActivatedRoute) {
		this.automatons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	}

	ngOnInit(): void {

		this._Activatedroute.paramMap.subscribe(params => { 
			this.unit_id= params.get('unit_id'); 
		});
	}
}
