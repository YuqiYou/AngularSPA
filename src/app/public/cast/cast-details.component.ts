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

 id: Number;
 cast!:Cast;
 constructor(private activateRoute: ActivatedRoute, private CastService:CastService){}
 

  ngOnInit(): void {

    this.getParams();

    this.CastService.getCast(id).subscribe(m=> {
      this.cast = m;
      console.log(this.cast)
    });
  }

  getParams(){
    this.activateRoute.data.subscribe(params => {
      if(params){   
        this.id = params?.id;
     }
    })
  }
}
