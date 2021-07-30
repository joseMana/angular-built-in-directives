import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimaryHighlightDirective } from './shared/directives/primary-highlight.directive';
import { NotIfDirective } from './shared/directives/my-if.directive';
import { CanSaveComponent } from './shared/components/can-save/can-save.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryHighlightDirective,
    NotIfDirective,
    CanSaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
