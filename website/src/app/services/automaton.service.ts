import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AutomatonService {
	constructor(private http: HttpClient) {}

	getData(unit, automaton) {
		let results: any = {
			alctt: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 26, 30, 50, 34, 45, 32, 10 ]
			},
			alcmt: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 30, 45, 20, 50, 26, 24, 12 ]
			},
			alcmw: {
				labels: [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ],
				data: [ 5, 50, 25, 34, 20, 35, 14 ]
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

		// this.http.get('http://localhost:3333/automaton/' + unit + '/' + automaton).subscribe(
		// 	(data) => {
		// 		results = data;
		// 	},
		// 	(error) => {
		// 		console.log(error);
		// 	}
		// );
		// return results;
	}
}
