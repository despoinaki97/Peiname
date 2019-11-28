import { ordAccount } from './ordaccount';

export class Item{
    public sharedWith: ordAccount[];
    constructor(
        public name: string,
        public Carbs?: number,
        public Sugar?: number,
        public Fat?: number,
        public Calories?: number,
        public price?: number,
        sharedWith?: ordAccount[]

    ){
        this.sharedWith = sharedWith;
    }
}