import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProductionUnitsPage } from './pages/production-units/production-units.page';
import { AlertsPage } from './pages/alerts/alerts.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    DashboardPage,
    ProductionUnitsPage,
    AlertsPage,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
