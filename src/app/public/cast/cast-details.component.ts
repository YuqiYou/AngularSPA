import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/shared/models/Cast';
import { CastService } from 'src/app/core/services/cast.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})

export class CastDetailsComponent implements OnInit {


 cast!:Cast;
 id!: number;
 constructor(private activateRoute: ActivatedRoute, private CastService:CastService){}
 

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params => {
     
        this.id = params["castId"];
        console.log(params["castId"]);
     
    });



    this.CastService.getCast(this.id).subscribe(m=> {
      this.cast = m;
      console.log(this.cast);
    });
  }


}
