class rectangle{
    constructor(l , b , colour){

        this.l = l ;
        this.b = b ;
        this.colour = colour ;

    }

    area(){
        let area = this.l + this.b ;
        return area ;
    }

    paint(){
        console.log(`Painting the rectangle with colour : ${this.colour}`)
    }
}

const rect = new rectangle(2,4,"blue"); //instance of the class or basically the object of the class
const area = rect.area() ;
console.log(area);
rect.paint() ;

//so this is basically a class rectangle where we have created a constructor to assign properties to its object
//the functions area and paint are also there whewre the keyword function is not required
//this refers to the current object that is in context 


const rect2 = {

    length : 10 ,
    breadth : 2 ,
    color : "blue"

}

function area_func(object){
    return object.length * object.breadth ;
}

const area_new = area_func(rect2);
console.log(area_new);
//here we have natively created a object rather then creating a class then its object //both these objects are different 
//we have defined the properties of the object inside of it and then created a function called area_func which takes object 
//as a perimeter and using its properties calculate its area and returns it as a number

const rect3 = {

    l : 10 ,
    b : 2 ,
    color : "blue" ,
    cal_area : function(){
        return this.l * this.b ;
    }

}

console.log(rect3.cal_area());
//this is basically when we created an object and then created its function inside of the object itself
//NOTE : dont use arrow functions while creating a function like this , because "this" in arrow functions refers to 
//surrounding scope , meaning thier this referers to the outside scope which would be NaN in this case


//ULTIMATELY :::::: 
//The goal of classes is to create a blueprint and the goal for the objects is to create key value pairs to fetch something
