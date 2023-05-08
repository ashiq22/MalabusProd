import { 
BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginModule } from "./login/login.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { authInterceptorProviders } from "./_helpers/auth.interceptor";
import { ForumComponent } from './pages/forum/forum.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { RapportVenteComponent } from './pages/rapport-vente/rapport-vente.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StatComponent } from './stat/stat.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
     BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, ForumComponent, HistoriqueComponent, RapportVenteComponent, ContactComponent, StatComponent ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
