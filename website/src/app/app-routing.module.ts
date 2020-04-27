import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProductionUnitsPage } from './pages/production-units/production-units.page';
import { PdfPage } from './pages/pdf/pdf.page';
import { CanActivateRouteGuard } from './services/route-guard.service';
import { UnitComponent } from './components/unit/unit.component';
import { AutomatonComponent } from './components/automaton/automaton.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		// canActivate: [CanActivateRouteGuard],
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
		// canActivate: [CanActivateRouteGuard],
		pathMatch: 'full'
	},
	{
		path: 'production-units',
		component: ProductionUnitsPage,
		// canActivate: [CanActivateRouteGuard],
		pathMatch: 'full',
	},
	{
		path: 'production-units/:unit_id',
		component: ProductionUnitsPage,
		// canActivate: [CanActivateRouteGuard],
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
		canActivate: [CanActivateRouteGuard],
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
