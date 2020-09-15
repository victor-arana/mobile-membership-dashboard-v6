import { Component, OnInit } from '@angular/core';
import { TransactionDistributionService } from './services/transaction-distribution.service';
import { TransactionDistribution } from './model/transaction-distribution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  distributions: TransactionDistribution[] 

  constructor(private service: TransactionDistributionService) { }

  ngOnInit() {
    this.service.getTransactionDistribution(0,new Date(), new Date()).subscribe(d => this.distributions = d);    
  }


}
