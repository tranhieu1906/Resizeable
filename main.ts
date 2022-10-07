import { Circle } from "./Circle"
import { Rectangle } from "./Rectangle"
import { Square } from "./Square"


let arr:any = []

arr[0] = new Circle("circle",10);
arr[1] = new Rectangle(10,10,"rectangle");
arr[2] = new Square("spuare",10)

arr.forEach((a:any) => {
    a.resize(Math.random()*100)    
});
arr.forEach(a =>{
    console.log(a.toString())
})