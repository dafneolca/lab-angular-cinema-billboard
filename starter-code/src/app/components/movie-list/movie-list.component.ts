import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
  providers: [MoviesService]
})
export class MovieListComponent implements OnInit {
  movies = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }
}
