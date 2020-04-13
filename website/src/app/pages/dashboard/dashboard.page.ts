import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: [ './dashboard.page.scss' ]
})
export class DashboardPage implements OnInit {
	
	// Tanks Temperatures
	public plcttOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public plcttLabels: Label[] = [ 'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5' ];
	public plcttType: ChartType = 'bar';
	public plcttLegend = false;
	public plcttPlugins = [];

	public plcttData: ChartDataSets[] = [
		{
			data: [ 2.6, 2.8, 3.4, 3.1, 2.4 ],
			label: 'Automaton 1',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		},
		{
			data: [ 3.6, 2.5, 3.7, 2.6, 2.9 ],
			label: 'Automaton 2',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		},
		{
			data: [ 2.6, 3.5, 2.7, 3.6, 2.9 ],
			label: 'Automaton 3',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		},
		{
			data: [ 3.1, 2.5, 3.8, 3.4, 2.5 ],
			label: 'Automaton 4',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		},
		{
			data: [ 3.0, 3.9, 3.0, 2.9, 2.5 ],
			label: 'Automaton 5',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		},
		{
			data: [ 2.6, 2.8, 3.4, 3.1, 2.4 ],
			label: 'Automaton 6',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		},
		{
			data: [ 3.6, 2.5, 3.7, 2.6, 2.9 ],
			label: 'Automaton 7',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		},
		{
			data: [ 2.6, 3.5, 2.7, 3.6, 3.9 ],
			label: 'Automaton 8',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		},
		{
			data: [ 3.1, 2.5, 3.1, 3.4, 2.5 ],
			label: 'Automaton 9',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		},
		{
			data: [ 3.0, 3.4, 3.0, 2.9, 2.5 ],
			label: 'Automaton 10',
			backgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ],
			hoverBackgroundColor: [ '#0095ff', '#0095ff', '#0095ff', '#0095ff', '#0095ff' ]
		}
	];

	//

	constructor() {
	}

	ngOnInit(): void {
		this.plcttData.forEach(dataset => {
			for (let i = 0; i < dataset.data.length; i++) {
				if ((dataset.data[i] > 3.7 && dataset.data[i] < 4.0) || (dataset.data[i] < 2.7 && dataset.data[i] > 2.5)) {
					dataset.backgroundColor[i] = "#ffaa00";
					dataset.hoverBackgroundColor[i] = "#ffaa00";
				} else if (dataset.data[i] <= 2.5 || dataset.data[i] >= 4.0) {
					dataset.backgroundColor[i] = "#ff3d71";
					dataset.hoverBackgroundColor[i] = "#ff3d71";
				}
			}
			
		});
	}
}
