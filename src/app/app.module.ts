import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { OperatorsContextsModule } from './operators-contexts/operators-contexts.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OperatorsContextsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
