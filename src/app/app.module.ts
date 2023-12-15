import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentCoBrowseComponent } from './agent-co-browse/agent-co-browse.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { COBrwoseIframeComponent } from './cobrwose-iframe/cobrwose-iframe.component';
import { JwttokensService } from './jwttokens.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from './icon/icon.module';
import { AgentPresentComponent } from './agent-present/agent-present.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentCoBrowseComponent,
    UserDetailsComponent,
    COBrwoseIframeComponent,
    AgentPresentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
  ],
  providers: [JwttokensService],
  bootstrap: [AppComponent],
  // entryComponents: [COBrwoseIframeComponent],
})
export class AppModule {
  // constructor(private injector: Injector) {
  //   const componentElement = createCustomElement(COBrwoseIframeComponent, {
  //     injector,
  //   });
  //   customElements.define('app-agent-co-browse', componentElement);
  // }
  // ngDoBootstrap() {}
}
