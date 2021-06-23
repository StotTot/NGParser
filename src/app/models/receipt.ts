export class Receipt {

    constructor(
        public id:number,
        public data:string,
        public url:string,
        public total?:number,
        public taxesPaid?:number,
        public date?:string
    ){}
}
