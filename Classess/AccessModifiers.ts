class CustomerAccess{
    private firstName: string;
    private lastName: string;



constructor(firstName:string,lastName:string){
this.firstName = firstName;
this.lastName  = lastName;
}

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

// let myCustomner = new Customer();

// myCustomner.firstName = "Farriah";
// myCustomner.lastName = "Talha";

let myCustomners= new CustomerAccess("talha","farriah");

console.log(myCustomners.firstName);
console.log(myCustomners.lastName);
 //if we do private var and access outside there is compile time error but js will still generate and code will run xD
 //To prevent do noEmitOnError  

//access modifiers public(default) protected private


