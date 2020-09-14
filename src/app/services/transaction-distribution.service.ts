import { Injectable } from '@angular/core';
import { TransactionDistribution } from '../model/transaction-distribution';

@Injectable({
  providedIn: 'root'
})
export class TransactionDistributionService {

  public transactions: TransactionDistribution[];

  constructor() { this.transactions = [
    {"parentLevel": -1, "parentId":1, "level":0, "elementId": 1, "elementName":"General", "regularTransactions": 25, "mobileTransactions": 75},
    {"parentLevel": 0, "parentId":1, "level":1, "elementId": 1, "elementName":"Region 01", "regularTransactions": 50, "mobileTransactions": 50},
    {"parentLevel": 0, "parentId":1, "level":1, "elementId": 2, "elementName":"Region 02", "regularTransactions": 5, "mobileTransactions": 25},
    {"parentLevel": 1, "parentId":1, "level":2, "elementId": 1, "elementName":"Distrito 01", "regularTransactions": 20, "mobileTransactions": 50},
    {"parentLevel": 1, "parentId":1, "level":2, "elementId": 2, "elementName":"Distrito 02", "regularTransactions": 5, "mobileTransactions": 25},
    {"parentLevel": 1, "parentId":1, "level":2, "elementId": 3, "elementName":"Distrito 03", "regularTransactions": 20, "mobileTransactions": 50},
    {"parentLevel": 1, "parentId":1, "level":2, "elementId": 4, "elementName":"Distrito 04", "regularTransactions": 5, "mobileTransactions": 25},
    {"parentLevel": 1, "parentId":2, "level":2, "elementId": 1, "elementName":"Distrito 01", "regularTransactions": 20, "mobileTransactions": 50},
    {"parentLevel": 1, "parentId":2, "level":2, "elementId": 2, "elementName":"Distrito 02", "regularTransactions": 5, "mobileTransactions": 25},
    {"parentLevel": 1, "parentId":2, "level":2, "elementId": 3, "elementName":"Distrito 03", "regularTransactions": 20, "mobileTransactions": 50},
    {"parentLevel": 1, "parentId":2, "level":2, "elementId": 4, "elementName":"Distrito 04", "regularTransactions": 5, "mobileTransactions": 25},
    {"parentLevel": 1, "parentId":2, "level":2, "elementId": 5, "elementName":"Distrito 04", "regularTransactions": 5, "mobileTransactions": 25}
  ];}
}
