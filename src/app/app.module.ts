import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { RouterModule } from '@angular/router';

import {MatButtonModule, MatCheckboxModule, MatChipsModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
// import { MenuComponent } from './menu/menu.component';



// const routes = [
//   {path:'', component: AppComponent},
//   {path:'child-parent', component: ChildParentComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    // MenuComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatChipsModule,
    MatToolbarModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
