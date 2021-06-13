import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input()
  quote!: Quotes;
  @Output()isComplete=new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  numberOflikes=0;
  numberOfdislike=0
  

  likebuttonclick(){
    this.quote.numberOflikes ++;
  }
  dislikebuttonclick() {
    this.quote.numberOfdislikes++;
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
