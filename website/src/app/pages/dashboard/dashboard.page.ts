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
	public plcfpLabels: Label[];
	public plcfpOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public plcfpLegend = false;
	public plcfpType = 'line';
	public plcfpPlugins = [];


	// Sold Products
	public plcspData: SingleDataSet;
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

	public plcprData: Array<any>;

	constructor() {}

	ngOnInit(): void {

		// Set Variables

		// Finished Products
		this.plcfpLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
		this.plcfpData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];

		// Sold Products
		this.plcspData = [ 100, 500, 300 ];

		// Tanks Temperatures
		this.plcttData[0].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 1
		this.plcttData[1].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 2
		this.plcttData[2].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 3
		this.plcttData[3].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 4
		this.plcttData[4].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 5
		this.plcttData[5].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 6
		this.plcttData[6].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 7
		this.plcttData[7].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 8
		this.plcttData[8].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 9
		this.plcttData[9].data = [ 2.6, 2.8, 3.4, 3.1, 2.4 ]; // Automatons 10

		// Salmonella Level
		this.plcslData[0].data = [ 65, 59, 90, 81, 56];

		// Ecoli Level
		this.plcelData[0].data = [ 65, 59, 90, 81, 56];
		
		// Listeria Level
		this.plcllData[0].data = [ 65, 59, 90, 81, 56];

		// PH Rate
		this.plcprData = [ 
			[
				{
					name: "Automaton #1",
					ph: 3.5
				},
				{
					name: "Automaton #2",
					ph: 3.5
				},
				{
					name: "Automaton #3",
					ph: 3.5
				},
				{
					name: "Automaton #4",
					ph: 3.5
				},
				{
					name: "Automaton #5",
					ph: 3.5
				},
				{
					name: "Automaton #6",
					ph: 3.5
				},
				{
					name: "Automaton #7",
					ph: 3.5
				},
				{
					name: "Automaton #8",
					ph: 3.5
				},
				{
					name: "Automaton #9",
					ph: 3.5
				},
				{
					name: "Automaton #10",
					ph: 3.5
				}
			],
			[
				{
					name: "Automaton #1",
					ph: 3.5
				},
				{
					name: "Automaton #2",
					ph: 3.5
				},
				{
					name: "Automaton #3",
					ph: 3.5
				},
				{
					name: "Automaton #4",
					ph: 3.5
				},
				{
					name: "Automaton #5",
					ph: 3.5
				},
				{
					name: "Automaton #6",
					ph: 3.5
				},
				{
					name: "Automaton #7",
					ph: 3.5
				},
				{
					name: "Automaton #8",
					ph: 3.5
				},
				{
					name: "Automaton #9",
					ph: 3.5
				},
				{
					name: "Automaton #10",
					ph: 3.5
				}
			],
			[
				{
					name: "Automaton #1",
					ph: 3.5
				},
				{
					name: "Automaton #2",
					ph: 3.5
				},
				{
					name: "Automaton #3",
					ph: 3.5
				},
				{
					name: "Automaton #4",
					ph: 3.5
				},
				{
					name: "Automaton #5",
					ph: 3.5
				},
				{
					name: "Automaton #6",
					ph: 3.5
				},
				{
					name: "Automaton #7",
					ph: 3.5
				},
				{
					name: "Automaton #8",
					ph: 3.5
				},
				{
					name: "Automaton #9",
					ph: 3.5
				},
				{
					name: "Automaton #10",
					ph: 3.5
				}
			],
			[
				{
					name: "Automaton #1",
					ph: 3.5
				},
				{
					name: "Automaton #2",
					ph: 3.5
				},
				{
					name: "Automaton #3",
					ph: 3.5
				},
				{
					name: "Automaton #4",
					ph: 3.5
				},
				{
					name: "Automaton #5",
					ph: 3.5
				},
				{
					name: "Automaton #6",
					ph: 3.5
				},
				{
					name: "Automaton #7",
					ph: 3.5
				},
				{
					name: "Automaton #8",
					ph: 3.5
				},
				{
					name: "Automaton #9",
					ph: 3.5
				},
				{
					name: "Automaton #10",
					ph: 3.5
				}
			],
			[
				{
					name: "Automaton #1",
					ph: 3.5
				},
				{
					name: "Automaton #2",
					ph: 3.5
				},
				{
					name: "Automaton #3",
					ph: 3.5
				},
				{
					name: "Automaton #4",
					ph: 3.5
				},
				{
					name: "Automaton #5",
					ph: 3.5
				},
				{
					name: "Automaton #6",
					ph: 3.5
				},
				{
					name: "Automaton #7",
					ph: 3.5
				},
				{
					name: "Automaton #8",
					ph: 3.5
				},
				{
					name: "Automaton #9",
					ph: 3.5
				},
				{
					name: "Automaton #10",
					ph: 3.5
				}
			]
		];

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
