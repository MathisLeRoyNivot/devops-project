import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions} from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { AutomatonService } from 'src/app/services/automaton.service';

@Component({
  selector: 'app-automaton',
  templateUrl: './automaton.component.html',
  styleUrls: ['./automaton.component.scss']
})
export class AutomatonComponent implements OnInit {

	constructor(private automatonService:AutomatonService) { 
	}

	

  // Tank Temperature 
	public alcttData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
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
	public alcttLegend = false;
	public alcttType = 'line';
	public alcttPlugins = [];
  

  // Main Temperature
	public alcmtData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alcmtLabels: Label[];
	public alcmtOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcmtLegend = false;
	public alcmtType = 'line';
	public alcmtPlugins = [];


	// Milk Weight
	public alcmwData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alcmwLabels: Label[];
	public alcmwOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcmwLegend = false;
	public alcmwType = 'line';
	public alcmwPlugins = [];


	// Finished product Weight
	public alcfpData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alcfpLabels: Label[];
	public alcfpOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcfpLegend = false;
	public alcfpType = 'line';
	public alcfpPlugins = [];


	// PH
	public alcphData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alcphLabels: Label[];
	public alcphOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcphLegend = false;
	public alcphType = 'line';
	public alcphPlugins = [];


	// K+
	public alckData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alckLabels: Label[];
	public alckOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alckLegend = false;
	public alckType = 'line';
	public alckPlugins = [];


	// NaCl
	public alcnaclData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alcnaclLabels: Label[];
	public alcnaclOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcnaclLegend = false;
	public alcnaclType = 'line';
	public alcnaclPlugins = [];


	// Salmonella
	public alcsData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alcsLabels: Label[];
	public alcsOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcsLegend = false;
	public alcsType = 'line';
	public alcsPlugins = [];


	// E-Coli
	public alcecData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alcecLabels: Label[];
	public alcecOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alcecLegend = false;
	public alcecType = 'line';
	public alcecPlugins = [];


	// Listeria
	public alclData: ChartDataSets[] = [
		{
			data: [ 26, 30, 12, 24, 45, 32, 10 ],
			label: 'Finished Product',
			backgroundColor: 'rgba(0, 213, 142, 0.4)',
			borderColor: '#00d58e',
			pointBackgroundColor: '#00d58e',
			pointHoverBorderColor: '#00d58e'
		}
	];
	public alclLabels: Label[];
	public alclOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		aspectRatio: 2
	};
	public alclLegend = false;
	public alclType = 'line';
	public alclPlugins = [];

  ngOnInit(): void {

	// Retrieve Data
	let data = this.automatonService.getData(1, 5);

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

	// this.automatonService.getData(1, 3).then((value) => {
	// 	console.log(value);
	// });
  }
}
