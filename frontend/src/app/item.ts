import { ordAccount } from './ordaccount';

export class Item{
    public sharedWith: ordAccount[];
    public image: string;
    constructor(
        public name: string,
        public Carbs?: number,
        public Sugar?: number,
        public Fat?: number,
        public Calories?: number,
        public price?: number,
        sharedWith?: ordAccount[],
        public item_details?:string

    ){
        this.sharedWith = sharedWith;
    }

    public getShares(){
        return new Array(this.sharedWith.length).fill(0);
    }
    
}