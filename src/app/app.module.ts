import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './shared/component/list-people/list-people.component';
import { ListApiComponent } from './components/list-api/list-api.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    ListApiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
