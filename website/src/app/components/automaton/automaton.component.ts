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

	automatonService = new AutomatonService();

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

  constructor() { 
  }

  ngOnInit(): void {

	// Tank Temperature
	let alctt = this.automatonService.getTankTemperatures(1, 5);
    this.alcttLabels = alctt.labels;
    this.alcttData[0].data = alctt.data;
    
    // Main Temperature
    this.alcmtLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	this.alcmtData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];

	// Milk Weight 
    this.alcmwLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	this.alcmwData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];

	// Finished Products
    this.alcfpLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	this.alcfpData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];

	// PH Level
    this.alcphLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	this.alcphData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];

	// K+
    this.alckLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	this.alckData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];

	// NaCl
    this.alcnaclLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	this.alcnaclData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];

	// Salmonella
    this.alcsLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	this.alcsData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];

	// E-Coli
    this.alcecLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	this.alcecData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];

	// Listeria
    this.alclLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
	this.alclData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];
  }

}
