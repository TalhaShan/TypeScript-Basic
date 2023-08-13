export class Customer{
    _firstName: string;
    _lastName: string;



constructor(_firstName:string,_lastName:string){
this._firstName = _firstName;
this._lastName  = _lastName;
}

public get firstName():string{
    return this._firstName;
}
public set firstName(value:string){
    this._firstName = value;
}

public get lastName():string{
    return this._lastName;
}
public set lastName(value:string){
    this._lastName = value;
}
}

// let myCustomner = new Customer();

// myCustomner.firstName = "Farriah";
// myCustomner.lastName = "Talha";

//access modifiers public(default) protected private


