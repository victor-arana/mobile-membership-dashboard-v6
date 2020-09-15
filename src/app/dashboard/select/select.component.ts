import { Component, Input } from '@angular/core';
import { TransactionDistributionService } from '../../services/transaction-distribution.service';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent{

  @Input() public distributions: Observable<TransactionDistribution[]>;

  constructor() { }

  

}
