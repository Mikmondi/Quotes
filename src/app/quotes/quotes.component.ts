import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes(1,'Educational quote','Anyone who has never made a mistake has never tried anything new',"Albert Einstein","Albert Einstein",new Date(2020,3,25),20,0),
    new Quotes(2,'Rasta quote',"Eat with the devil bt use a long spoon",'positive vibe.com','Yahi bu',new Date(2019,4,6),50,0),
    new Quotes(3,"life quote","The road is loang bt we bt can't just stop","calos.com","Don carlos",new Date(2018,7,20),56,0),
    new Quotes(4,'Love quote','One love to dih universe','Tuff Gong','Marley',new Date(2020,1,21),50,0)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
