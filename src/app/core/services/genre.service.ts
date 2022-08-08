import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }

  getGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>("https://localhost:7013/api/Genres/Genres");

  }
}
