import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProductionUnitsPage } from './pages/production-units/production-units.page';
import { PdfPage } from './pages/pdf/pdf.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartsModule } from 'ng2-charts';
import { UnitComponent } from './components/unit/unit.component';
import { AutomatonComponent } from './components/automaton/automaton.component';
import { CanActivateRouteGuard } from './services/route-guard.service';
import { AutomatonService } from './services/automaton.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    DashboardPage,
    ProductionUnitsPage,
    PdfPage,
    NavbarComponent,
    UnitComponent,
    AutomatonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CanActivateRouteGuard,
    AutomatonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
