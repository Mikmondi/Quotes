import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes(1,'The problem with the world is that the intelligent people are full of doubts,while the stupid ones are full of confidence.','Anyone who has never made a mistake has never tried anything new',"","Michael Oduor",new Date(2021,4,15),20,0),
    new Quotes(2,'Rasta quote',"Eat with the devil bt use a long spoon",'positive vibe.com','Yahi bu',new Date(2021,4,21),50,0),
    
  ];
  toggleDetails(index:any){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  deleteQuote(isComplete:any,index:any){
    if(isComplete){
      this.quotes.splice(index,1)
    
     }
 }

  constructor() { }

  ngOnInit(): void {
  }

}
