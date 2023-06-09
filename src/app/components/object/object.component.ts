import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { card } from 'src/app/models/object.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

  object?: card;
  details: boolean = false;

  constructor( private listsService: ListService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);
    this.listsService.getObjectById(identifier!).subscribe((card) => {
      if (!card){
        return this.router.navigateByUrl('/');
      }
      this.object = card;
      console.log('object --> ', this.object);
      return this.router.navigateByUrl('/object/'+ this.object.id)
    })
  }

  show_details(){
    return this.details = true;
  }

  show_less_details(){
    return this.details = false;
  }

}
