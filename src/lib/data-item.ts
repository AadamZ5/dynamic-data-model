import { Observable, Subject } from "rxjs";

export class DataItem<T>{
    
    public get value() : T | undefined {
        return this._value;
    }

    public set value(v : T | undefined) {
        this._value = v;
        this._value_subject.next(this.value);
    }

    public get value_change_observable() : Observable<T|undefined> {
        return this._value_subject.asObservable();
    }

    name: string;

    private _value?: T;
    private _value_subject: Subject<T | undefined> = new Subject();

    constructor(name: string, value?: T){
        this.name = name;
        this.value = value;
    }
}