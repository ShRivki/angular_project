export class Course{
    code?:number;
    name?:string;
    category?:number;
    countLesson?:number;
    date:Date;
    sillibos:string[];
    wayLearning:type;
    codeLecturer?:number;
    image:string;
}
export enum type {
    frontal = 1,
    ZOOM = 2,
}