import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumsComponent } from './albums/albums.component';
import {AlbumsService} from "./albums/albums.service";

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'footer',      component: FooterComponent },
  {
    path: 'albums',
    component: AlbumsComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: FooterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    AlbumsComponent
  ],
  imports: [
    // MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    // MaterialModule,
    // MatCardModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
