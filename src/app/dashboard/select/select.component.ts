import { Component, OnInit } from '@angular/core';
import { TransactionDistributionService } from '../../services/transaction-distribution.service';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  distributions: TransactionDistribution[]

  constructor(private service: TransactionDistributionService) { }

  ngOnInit() {
    this.service.getTransactionDistribution(0,new Date(), new Date()).subscribe(d => this.distributions = d);    
  }

}
