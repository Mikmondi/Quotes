import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes(1,'Inspirational Quote','The problem with the world is that the intelligent people are full of doubts,while the stupid ones are full of confidence.',"Charles Bukowski","Michael Oduor",new Date(2021,4,15),0,0),
    new Quotes(2,'Motivational Quote','Hard times create strong men,strong men create good times,good times create weak men,and weak men create hard times.','Michael hopf','Michael Oduor',new Date(2021,4,21),0,0),
    
  ];
  toggleDetails(index:any){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  deleteQuote(isComplete:any,index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
     }
  }
  
  addNewQuote(quote:any){
    let quotelength=this.quotes.length;
    quote.id=quotelength+1;
    quote.completeDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
