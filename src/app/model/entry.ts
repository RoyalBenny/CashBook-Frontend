export class Entry{
    constructor(
        public id:number,
        public dateTime:Date,
        public description:string,
        public amount: number,
        public balance:number,
        public type: boolean
    ){}
}