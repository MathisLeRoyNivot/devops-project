import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { AutomatonService } from 'src/app/services/automaton.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-automaton',
	templateUrl: './automaton.component.html',
	styleUrls: [ './automaton.component.scss' ]
})
export class AutomatonComponent implements OnInit {

	unit_id: any;
	automaton_id: any;

	constructor(
		private automatonService: AutomatonService,
		private _Activatedroute:ActivatedRoute) {}

	// Tank Temperature
	public alcttData: ChartDataSets[] = [
		{
			data: [],
			label: 'Tank Temperature',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alcttLabels: Label[];
	public alcttOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcttLegend = true;
	public alcttType = 'line';
	public alcttPlugins = [];

	// Main Temperature
	public alcmtData: ChartDataSets[] = [
		{
			data: [],
			label: 'Outside Temperature',
			backgroundColor: 'rgba(51, 102, 255, 0.4)',
			borderColor: '#3366ff',
			pointBackgroundColor: '#3366ff',
			pointHoverBorderColor: '#3366ff'
		}
	];
	public alcmtLabels: Label[];
	public alcmtOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcmtLegend = true;
	public alcmtType = 'line';
	public alcmtPlugins = [];

	// Milk Weight
	public alcmwData: ChartDataSets[] = [
		{
			data: [],
			label: 'Milk Weight',
			backgroundColor: 'rgba(0, 149, 255, 0.4)',
			borderColor: '#0095ff',
			pointBackgroundColor: '#0095ff',
			pointHoverBorderColor: '#0095ff'
		}
	];
	public alcmwLabels: Label[];
	public alcmwOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcmwLegend = true;
	public alcmwType = 'line';
	public alcmwPlugins = [];

	// Finished product Weight
	public alcfpData: ChartDataSets[] = [
		{
			data: [],
			label: 'Finished Product Weight',
			backgroundColor: 'rgba(255, 170, 0, 0.4)',
			borderColor: '#ffaa00',
			pointBackgroundColor: '#ffaa00',
			pointHoverBorderColor: '#ffaa00'
		}
	];
	public alcfpLabels: Label[];
	public alcfpOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcfpLegend = true;
	public alcfpType = 'line';
	public alcfpPlugins = [];

	// PH
	public alcphData: ChartDataSets[] = [
		{
			data: [],
			label: 'PH',
			backgroundColor: 'rgba(255, 61, 113, 0.4)',
			borderColor: '#ff3d71',
			pointBackgroundColor: '#ff3d71',
			pointHoverBorderColor: '#ff3d71'
		}
	];
	public alcphLabels: Label[];
	public alcphOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcphLegend = true;
	public alcphType = 'line';
	public alcphPlugins = [];

	// K+
	public alckData: ChartDataSets[] = [
		{
			data: [],
			label: 'K+',
			backgroundColor: 'rgba(171, 15, 242, 0.4)',
			borderColor: '#ab0ff2',
			pointBackgroundColor: '#ab0ff2',
			pointHoverBorderColor: '#ab0ff2'
		}
	];
	public alckLabels: Label[];
	public alckOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alckLegend = true;
	public alckType = 'line';
	public alckPlugins = [];

	// NaCl
	public alcnaclData: ChartDataSets[] = [
		{
			data: [],
			label: 'NaCl',
			backgroundColor: 'rgba(52, 46, 173, 0.4)',
			borderColor: '#342ead',
			pointBackgroundColor: '#342ead',
			pointHoverBorderColor: '#342ead'
		}
	];
	public alcnaclLabels: Label[];
	public alcnaclOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcnaclLegend = true;
	public alcnaclType = 'line';
	public alcnaclPlugins = [];

	// Salmonella
	public alcsData: ChartDataSets[] = [
		{
			data: [],
			label: 'Salmonella',
			backgroundColor: 'rgb(0, 189, 170, 0.4)',
			borderColor: '#00bdaa',
			pointBackgroundColor: '#00bdaa',
			pointHoverBorderColor: '#00bdaa'
		}
	];
	public alcsLabels: Label[];
	public alcsOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcsLegend = true;
	public alcsType = 'line';
	public alcsPlugins = [];

	// E-Coli
	public alcecData: ChartDataSets[] = [
		{
			data: [],
			label: 'E-Coli',
			backgroundColor: 'rgba(181, 144, 202, 0.4)',
			borderColor: '#b590ca',
			pointBackgroundColor: '#b590ca',
			pointHoverBorderColor: '#b590ca'
		}
	];
	public alcecLabels: Label[];
	public alcecOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcecLegend = true;
	public alcecType = 'line';
	public alcecPlugins = [];

	// Listeria
	public alclData: ChartDataSets[] = [
		{
			data: [],
			label: 'Listeria',
			backgroundColor: 'rgb(253, 46, 179, 0.4)',
			borderColor: '#fd2eb3',
			pointBackgroundColor: '#fd2eb3',
			pointHoverBorderColor: '#fd2eb3'
		}
	];
	public alclLabels: Label[];
	public alclOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alclLegend = true;
	public alclType = 'line';
	public alclPlugins = [];

	ngOnInit(): void {
		// Get Params
		this._Activatedroute.paramMap.subscribe(params => { 
			this.unit_id= params.get('unit_id'); 
			this.automaton_id= params.get('automaton_id'); 
		});

		console.log(this.unit_id);
		console.log(this.automaton_id);

		// Retrieve Data
		this.automatonService.getData(this.unit_id, this.automaton_id).then((data) => {
			// Tank Temperature
			let alctt = data.alctt;
			this.alcttLabels = alctt.labels;
			this.alcttData[0].data = alctt.data;

			// Main Temperature
			let alcmt = data.alcmt;
			this.alcmtLabels = alcmt.labels;
			this.alcmtData[0].data = alcmt.data;

			// Milk Weight
			let alcmw = data.alcmw;
			this.alcmwLabels = alcmw.labels;
			this.alcmwData[0].data = alcmw.data;

			// Finished Products
			let alcfp = data.alcfp;
			this.alcfpLabels = alcfp.labels;
			this.alcfpData[0].data = alcfp.data;

			// PH Level
			let alcph = data.alcph;
			this.alcphLabels = alcph.labels;
			this.alcphData[0].data = alcph.data;

			// K+
			let alck = data.alck;
			this.alckLabels = alck.labels;
			this.alckData[0].data = alck.data;

			// NaCl
			let alcnacl = data.alcnacl;
			this.alcnaclLabels = alcnacl.labels;
			this.alcnaclData[0].data = alcnacl.data;

			// Salmonella
			let alcs = data.alcs;
			this.alcsLabels = alcs.labels;
			this.alcsData[0].data = alcs.data;

			// E-Coli
			let alcec = data.alcec;
			this.alcecLabels = alcec.labels;
			this.alcecData[0].data = alcec.data;

			// Listeria
			let alcl = data.alcl;
			this.alclLabels = alcl.labels;
			this.alclData[0].data = alcl.data;
		});
	}
}
