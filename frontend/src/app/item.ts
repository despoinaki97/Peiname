import { ordAccount } from './ordaccount';
import { DatabankService } from './databank.service'
export class Item{
    public sharedWith: ordAccount[];
    public image: string;
    public _id: any // DB
    public id : string;
    constructor(
        public name: string,
        public Carbs?: number,
        public Sugar?: number,
        public Fat?: number,
        public Calories?: number,
        public price?: number,
        sharedWith?: ordAccount[],
        public item_details?:string,
        public item_img?:string,
        public defaulting?:string[],
        public ingredients?:string[],
        public extra?:string[]

    ){
        this.sharedWith = sharedWith;
    }

    public getShares(){
        return new Array(this.sharedWith.length).fill(0);
    }
    
}