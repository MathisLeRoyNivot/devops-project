import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProductionUnitsPage } from './pages/production-units/production-units.page';
import { AlertsPage } from './pages/alerts/alerts.page';


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
		pathMatch: 'full'
	},
	{
		path: 'alerts',
		component: AlertsPage,
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
