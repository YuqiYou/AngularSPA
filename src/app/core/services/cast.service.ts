import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cast } from 'src/app/shared/models/Cast';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http:HttpClient) { }

  getCast(id:number):Observable<Cast>{
    return this.http.get<Cast>("https://localhost:7013/api/Cast/" + id);
  } 
}