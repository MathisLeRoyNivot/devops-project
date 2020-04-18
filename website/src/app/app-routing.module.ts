import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProductionUnitsPage } from './pages/production-units/production-units.page';
import { PdfPage } from './pages/pdf/pdf.page';
import { UnitComponent } from './components/unit/unit.component';
import { AutomatonComponent } from './components/automaton/automaton.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginPage,
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardPage,
		pathMatch: 'full'
	},
	{
		path: 'production-units',
		component: ProductionUnitsPage,
		pathMatch: 'full',
	},
	{
		path: 'production-units/:unit_id',
		component: ProductionUnitsPage,
		children: [
			{
				path: '',
				component: UnitComponent
			},
			{
				path: ':automaton_id',
				component: UnitComponent,
				children: [
					{
						path: '',
						component: AutomatonComponent
					},
				]
			}
		]
	},
	{
		path: 'pdf',
		component: PdfPage,
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
