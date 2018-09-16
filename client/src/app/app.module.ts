import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { StaffComponent } from './staff/staff.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { ArticulosComponent } from './articulos/articulos.component';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
//import { BasicAuthInterceptor} from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ReactiveFormsModule }    from '@angular/forms';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor} from './_helpers/jwt.interceptor';
const routes: Routes=[
  {path:'', component: InicioComponent, pathMatch:'full'},
  {path:'articulos', component: ArticulosComponent},
  {path:'staff', component: StaffComponent},
  {path:'login', component: LoginComponent},
  { path: 'panel', component: PanelComponent, canActivate: [AuthGuard] },
  {path: 'institucional', component: InstitucionalComponent},
  
  {path:'**', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    StaffComponent,
    InstitucionalComponent,
    ArticulosComponent,
    HeaderComponent,

    PanelComponent,
 
    LoginComponent,
 
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
