import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TodosComponent,
    PostsComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
