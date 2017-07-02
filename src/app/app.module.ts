import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgPipesModule } from 'ngx-pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GetCharactersService } from './get-characters.service';
import { ConcatPipe } from './concat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConcatPipe
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [GetCharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
