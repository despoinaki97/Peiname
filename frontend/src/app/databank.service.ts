import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { ordAccount } from './ordaccount';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabankService {

  constructor() { }
  getShops():Shop[]{
    return [];
  }
  getUsers():Observable<ordAccount[]>{
    return of([]);
  }
}
