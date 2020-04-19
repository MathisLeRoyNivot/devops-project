import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AutomatonService {
	constructor() {}

	getTankTemperatures(unit, automaton) {
		let results = {
			labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
			data: [ 26, 30, 50, 34, 45, 32, 10 ]
		};

		return results;
	}
}
