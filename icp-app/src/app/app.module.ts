import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { MainComponent } from './main/main.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { LoginComponent } from './login/login.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { DivpanelComponent } from './divpanel/divpanel.component';
 
 


const appRoutes: Routes = [
{path: '', redirectTo: '/', pathMatch: 'full'},
{path: '', component:LoginComponent,children:[{path:'login',component:LoginComponent}]},
{path:'main',component:HeaderContainerComponent,children:[
{path:'',redirectTo:'dashboard',pathMatch:'full'}, 
{path: 'dashboard', component: MainComponent},
{path: 'all', component: HomeComponent },
{path: 'mybooks', component: MybooksComponent },
{path: 'docs', component: DocsComponent }]}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    DocsComponent,
    MybooksComponent,
    MainComponent,
    LoginComponent,
    HeaderContainerComponent,
    DivpanelComponent
     
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    Ng2GoogleChartsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







