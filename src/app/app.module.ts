import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes} from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { IntroductionComponent } from './tutorial/introduction/introduction.component';
import { TheComponent } from './tutorial/the/the.component';
import { HeroEditorComponent } from './tutorial/hero-editor/hero-editor.component';
import { DisplayingListComponent } from './tutorial/displaying-list/displaying-list.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { ArchitectureComponent } from './Fundamentals/architecture/architecture.component';
import { ArchitectureOverviewComponent } from './Fundamentals/Architecture/architecture-overview/architecture-overview.component';
import { IntroductionToModulesComponent } from './Fundamentals/Architecture/introduction-to-modules/introduction-to-modules.component';
import { IntroductionToComponentsComponent } from './Fundamentals/Architecture/introduction-to-components/introduction-to-components.component';
import { IntroductionToServicesComponent } from './Fundamentals/Architecture/introduction-to-services/introduction-to-services.component';
import { IntroductionToTemplateComponent } from './Fundamentals/Architecture/introduction-to-template/introduction-to-template.component';
import { ComponentsAndTemplatesComponent } from './fundamentals/components-and-templates/components-and-templates.component';
import { FormsComponent } from './fundamentals/forms/forms.component';
import { ObservablesAndRsJXComponent } from './fundamentals/observables-and-rs-jx/observables-and-rs-jx.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { TechniquesComponent } from './techniques/techniques.component';
import { APIComponent } from './api/api.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { BlogServices } from './blogs/blogServices';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './fundamentals/architecture/architecture-auth-guard.guard';
//import { HttpClient } from '../selenium-webdriver/http';


const appRoutes:Routes=[
{path:'',redirectTo:'/Home',pathMatch:'full'},
{path:'Home',canActivate:[AuthGuard],component:HomeComponent,},
{path:'Features',canActivate:[AuthGuard],component:FeaturesComponent},
{path:'Docs',canActivate:[AuthGuard],component:DocsComponent},
{path:'Resources',canActivate:[AuthGuard],component:ResourcesComponent},
{path:'Events',canActivate:[AuthGuard],canActivateChild:[AuthGuard],component:EventsComponent,children:[
  {path:'EventsDetails/:eventId',component:EventsDetailsComponent}]
},
{path:'Blogs',canActivate:[AuthGuard],component:BlogsComponent},
{path:'Totorials',canActivate:[AuthGuard],component:TutorialComponent,children:[
{path:'Introduction',component:IntroductionComponent},
{path:'The',component:TheComponent},
{path:'HeroEditor',component:HeroEditorComponent},
{path:'Displaying',component:DisplayingListComponent},
]},

{path:'Architecture',canActivate:[AuthGuard], canActivateChild:[AuthGuard],component:ArchitectureComponent,children:[
  {path:'ArchitectureOverview',canDeactivate:[CanDeactivateGuard],component:ArchitectureOverviewComponent},
  {path:'IntroductionToComponents',canDeactivate:[CanDeactivateGuard],component:IntroductionToComponentsComponent},
  {path:'IntroductionToModules',canDeactivate:[CanDeactivateGuard],component:IntroductionToModulesComponent},
  {path:'IntroductionToServices',canDeactivate:[CanDeactivateGuard],component:IntroductionToServicesComponent},
  {path:'IntroductionToTemplates',canDeactivate:[CanDeactivateGuard],component:IntroductionToTemplateComponent},
  {path:'ComponentsAndTemplates',canDeactivate:[CanDeactivateGuard],component:ComponentsAndTemplatesComponent}
]},

{path:'FormsInDepth',canActivate:[AuthGuard],component:FormsComponent},
{path:'ObserablesAndRxJS',canActivate:[AuthGuard],component:ObservablesAndRsJXComponent},
{path:'GettingStarted',canActivate:[AuthGuard],component:GettingStartedComponent},
{path:'Techniques',canActivate:[AuthGuard],component:TechniquesComponent},
{path:'API',canActivate:[AuthGuard],component:APIComponent},
{path:'**',component:ErrorComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DocsComponent,
    ResourcesComponent,
    EventsComponent,
    BlogsComponent,
    ErrorComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TutorialComponent,
    IntroductionComponent,
    TheComponent,
    HeroEditorComponent,
    DisplayingListComponent,
    FundamentalsComponent,
    ArchitectureComponent,
    ArchitectureOverviewComponent,
    IntroductionToModulesComponent,
    IntroductionToComponentsComponent,
    IntroductionToServicesComponent,
    IntroductionToTemplateComponent,
    ComponentsAndTemplatesComponent,
    FormsComponent,
    ObservablesAndRsJXComponent,
    GettingStartedComponent,
    TechniquesComponent,
    APIComponent,
    EventsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogServices,AuthGuard,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
