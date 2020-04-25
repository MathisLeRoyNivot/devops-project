import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AutomatonService {
	constructor() {}

	getData(unit, automaton) {
		let results = {
			alctt: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alcmt: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alcmw: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alcfp: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alcph: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alck: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alcnacl: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alcs: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alcec: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alcl: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			}
		};

		return results;
	}
}
