import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/core/services/genre.service';
import { Genre } from 'src/app/shared/models/Genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres!:Genre[];
  constructor(private GenreService:GenreService) { }

  ngOnInit(): void {

    this.GenreService.getGenres().subscribe(m=> {
      this.genres = m;
      console.log(this.genres)
    });
  }

}
