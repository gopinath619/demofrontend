import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectService } from './select.service';
import {MaterialmoduleModule} from './materialmodule/materialmodule.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { CrudComponent } from './home/crud/crud.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { EditComponent } from './home/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    CrudComponent,
    AutocompleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialmoduleModule
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
