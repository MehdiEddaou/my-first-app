import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
const appRoutes: Routes = [
  
  ];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    // RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
    LayoutModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
