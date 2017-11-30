import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieSearchComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
