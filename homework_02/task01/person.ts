export class Person {
  private _firstName:string;
  private _lastName:string;
  private _age:number;

  constructor(fname:string, lname:string, age:number) {
    this._firstName = fname;
    this._lastName = lname;
    this._age = age;
  }

  set firstName(name:string) {
    this._firstName = name;
  }

  get firstName():string {
    return this._firstName;
  }

  set lastName(name:string) {
    this._lastName = name;
  }

  get lastName():string {
    return this._lastName;
  }

  set age(age:number) {
    this._age = age;
  }
  
  get age():number {
    return this._age;
  }

  toString():string {
    let returnStr = `${this._firstName} ${this._lastName} ${this._age}`;
    return returnStr;
  }
}
