import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions} from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: [ './dashboard.page.scss' ]
})
export class DashboardPage implements OnInit {
	
	// Finished Products
	public plcfpData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public plcfpLabels: Label[] = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	public plcfpOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public plcfpLegend = false;
	public plcfpType = 'line';
	public plcfpPlugins = [];

	// Sold Products
	public plcspData: SingleDataSet = [ 100, 500, 300 ];
	public plcspLabels: Label[] = [ [ 'Cheese' ], [ 'Milk' ], 'Butter' ];
	public plcspOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2,
		legend: {
			position: 'left'
		}
	};
	public plcspType: ChartType = 'pie';
	public plcspLegend = true;
	public plcspPlugins = [];

	// Tanks Temperatures
	public plcttData: ChartDataSets[] = [
		{
			data: [ 2.6, 2.8, 3.4, 3.1, 2.4 ],
			label: 'Automaton 1',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		},
		{
			data: [ 3.6, 2.5, 3.7, 2.6, 2.9 ],
			label: 'Automaton 2',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		},
		{
			data: [ 2.6, 3.5, 2.7, 3.6, 2.9 ],
			label: 'Automaton 3',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		},
		{
			data: [ 3.1, 2.5, 3.8, 3.4, 2.5 ],
			label: 'Automaton 4',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		},
		{
			data: [ 3.0, 3.9, 3.0, 2.9, 2.5 ],
			label: 'Automaton 5',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		},
		{
			data: [ 2.6, 2.8, 3.4, 3.1, 2.4 ],
			label: 'Automaton 6',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		},
		{
			data: [ 3.6, 2.5, 3.7, 2.6, 2.9 ],
			label: 'Automaton 7',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		},
		{
			data: [ 2.6, 3.5, 2.7, 3.6, 3.9 ],
			label: 'Automaton 8',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		},
		{
			data: [ 3.1, 2.5, 3.1, 3.4, 2.5 ],
			label: 'Automaton 9',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		},
		{
			data: [ 3.0, 3.4, 3.0, 2.9, 2.5 ],
			label: 'Automaton 10',
			backgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			],
			hoverBackgroundColor: [
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)',
				'rgba(0, 149, 255, 0.6)'
			]
		}
	];
	public plcttLabels: Label[] = [ 'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5' ];
	public plcttOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public plcttType: ChartType = 'bar';
	public plcttLegend = false;
	public plcttPlugins = [];


	// Salmonella Level
	public plcslData: ChartDataSets[] = [
		{ 
			data: [ 65, 59, 90, 81, 56], 
			label: 'Salmonella',
			backgroundColor: "rgba(65, 116, 255, 0.5)",
			borderColor: "rgb(65, 116, 255)",
			pointBackgroundColor: "rgb(65, 116, 255)",
			pointHoverBorderColor: "rgb(65, 116, 255)"
		}
	];
	public plcslLabels: Label[] = [
		'Unit 1',
		'Unit 2',
		'Unit 3',
		'Unit 4',
		'Unit 5'
	];
	public plcslOptions: RadialChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2,
		legend: {position: 'left'}
	};
	public plcslType: ChartType = 'radar';

	// E-Coli Level
	public plcelData: ChartDataSets[] = [
		{ 
			data: [ 65, 59, 90, 81, 56], 
			label: 'E-Coli',
			backgroundColor: "rgba(0, 214, 143, 0.5)",
			borderColor: "rgb(0, 214, 143)",
			pointBackgroundColor: "rgb(0, 214, 143)",
			pointHoverBorderColor: "rgb(0, 214, 143)"
		}
	];
	public plcelLabels: Label[] = [
		'Unit 1',
		'Unit 2',
		'Unit 3',
		'Unit 4',
		'Unit 5'
	];
	public plcelOptions: RadialChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2,
		legend: {position: 'left'}
	};
	public plcelType: ChartType = 'radar';

	// Listeria Level
	public plcllData: ChartDataSets[] = [
		{ data: [ 65, 59, 90, 81, 56], label: 'E-Coli' }
	];
	public plcllLabels: Label[] = [
		'Unit 1',
		'Unit 2',
		'Unit 3',
		'Unit 4',
		'Unit 5'
	];
	public plcllOptions: RadialChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2,
		legend: {position: 'left'}
	};
	public plcllType: ChartType = 'radar';

	constructor() {}

	ngOnInit(): void {
		// Warning and Alerts for Tanks Temperatures
		this.plcttData.forEach((dataset) => {
			for (let i = 0; i < dataset.data.length; i++) {
				if (
					(dataset.data[i] > 3.7 && dataset.data[i] < 4.0) ||
					(dataset.data[i] < 2.7 && dataset.data[i] > 2.5)
				) {
					dataset.backgroundColor[i] = 'rgba(255, 170, 0, 0.5)';
					dataset.hoverBackgroundColor[i] = 'rgba(255, 170, 0, 0.5)';
				} else if (dataset.data[i] <= 2.5 || dataset.data[i] >= 4.0) {
					dataset.backgroundColor[i] = 'rgba(255, 61, 113, 0.5)';
					dataset.hoverBackgroundColor[i] = 'rgba(255, 61, 113, 0.5)';
				}
			}
		});
	}
}
