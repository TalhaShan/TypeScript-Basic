//get set is avb after ES5 so make sure to sset compiler flag to ES5 if lower 
//so to manage to much flag like compile emit on erro etc we have "tsconfig.json"
//tsconfig.json defines compiler option and project settings


class CustomerAccessModifiers{
    private _firstName: string;
    private _lastName: string;



constructor(firstName:string,lastName:string){
this._firstName = firstName;
this._lastName  = lastName;
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

let customerObj= new CustomerAccessModifiers("talha","farriah");

console.log(customerObj.firstName);
console.log(customerObj.lastName);
 //if we do private var and access outside there is compile time error but js will still generate and code will run xD
 //To prevent do noEmitOnError  

//access modifiers public(default) protected private


