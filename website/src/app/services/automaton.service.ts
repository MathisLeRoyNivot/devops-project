import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AutomatonService {
	constructor(private http: HttpClient) {}

	public results: any

	async getData(unit, automaton): Promise<any> {
		this.results = {
			alctt: {
				labels: [],
				data: []
			},
			alcmt: {
				labels: [],
				data: []
			},
			alcmw: {
				labels: [],
				data: []
			},
			alcfp: {
				labels: [],
				data: []
			},
			alcph: {
				labels: [],
				data: []
			},
			alck: {
				labels: [],
				data: []
			},
			alcnacl: {
				labels: [],
				data: []
			},
			alcs: {
				labels: [],
				data: []
			},
			alcec: {
				labels: [],
				data: []
			},
			alcl: {
				labels: [],
				data: []
			}
		};


		this.http.get('http://localhost:3333/automaton/' + unit + '/' + automaton).subscribe(
			(data: Array<any>) => {
				let rawDate: Date;
				let formatDate: any;
				data.forEach(automaton => {
					// Format Date
					rawDate = new Date(automaton.created_at);
					formatDate = rawDate.getHours() + "H" + rawDate.getMinutes();
					this.results.alctt.data.push(automaton.tank_temp);
					this.results.alctt.labels.push(formatDate);
					this.results.alcmt.data.push(automaton.outside_temp);
					this.results.alcmt.labels.push(formatDate);
					this.results.alcmw.data.push(automaton.milk_weight);
					this.results.alcmw.labels.push(formatDate);
					this.results.alcfp.data.push(automaton.final_product_weight);
					this.results.alcfp.labels.push(formatDate);
					this.results.alcph.data.push(automaton.ph);
					this.results.alcph.labels.push(formatDate);
					this.results.alck.data.push(automaton.potassium);
					this.results.alck.labels.push(formatDate);
					this.results.alcnacl.data.push(automaton.sodium_chlorure_concentration);
					this.results.alcnacl.labels.push(formatDate);
					this.results.alcs.data.push(automaton.salmonella_lvl);
					this.results.alcs.labels.push(formatDate);
					this.results.alcec.data.push(automaton.e_coli_lvl);
					this.results.alcec.labels.push(formatDate);
					this.results.alcl.data.push(automaton.listeria_lvl);
					this.results.alcl.labels.push(formatDate);
				});
				console.log(this.results);
				return this.results;
			},
			(error) => {
				console.log(error);
			}
		);

		return this.results;
	}
}
