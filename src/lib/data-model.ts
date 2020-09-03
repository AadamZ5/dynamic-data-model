import { DataItem } from "./data-item";

export class DataModel<T> extends DataItem<DataItem<any>[]>{
    
    public get items() : Array<DataItem<any>> {
        return this.value!;
    }

    public set items(v : Array<DataItem<any>>) {
        this.value = v;
    }
    
    constructor(name:string, items?: DataItem<any>[]){
        super(name, items ? items : new Array<DataItem<any>>());
    }
    
}