import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/models/object.interface';
import { ListService } from 'src/app/services/list.service'
import { trigger, style, transition, animate, query, stagger, keyframes, state } from '@angular/animations';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(1000, [animate('3s', style({ opacity: 1 }))])
          ],
          { optional: true }
        )
      ])
  ])]
})
export class ListComponent implements OnInit {

  lists: card[] = [];
  type: boolean = false;
  state: boolean = true;

  constructor( private listsService: ListService) { }

  ngOnInit(): void {
    this.listsService.getAllObjects().subscribe(lists => {
      this.state = true;
      setTimeout(()=>{                       
        if (lists) {
          this.lists = lists;
          this.state = false;
        }
      }, 2000);
      
     } );
  }

  change(val: boolean) {
    return this.type = val;
  }

}
