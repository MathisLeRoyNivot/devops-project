import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions} from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-automaton',
  templateUrl: './automaton.component.html',
  styleUrls: ['./automaton.component.scss']
})
export class AutomatonComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {

    // Tank Temperature
    this.alcttLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
    this.alcttData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];
    
    // Main Temperature
    this.alcmtLabels = [ '18h10', '18h20', '18h30', '18h40', '18h50', '19h00', '19h10' ];
		this.alcmtData[0].data = [ 26, 30, 50, 34, 45, 32, 10 ];
  }

}
