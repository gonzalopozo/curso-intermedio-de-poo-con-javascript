const gonzalo = {
    name: "Gonzalo",
    age: 19,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        
        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(gonzalo));
// console.log(Object.getOwnPropertyNames(gonzalo));
// console.log(Object.entries(gonzalo));


// Object.defineProperty(gonzalo,"pruebaNASA", {
    //     value: "extraterrestres",
    //     enumerable: true,
    //     writable: true,
    //     configurable: true
    // })
    
// Object.defineProperty(gonzalo,"navigator", {
//     value: "brave",
//     enumerable: false,
//     writable: true,
//     configurable: true
// })

// Object.defineProperty(gonzalo,"editor", {
//     value: "VSCode",
//     enumerable: true,
//     writable: false,
//     configurable: true
// })

// Object.defineProperty(gonzalo,"terminal", {
//     value: "WSL",
// enumerable: true,
// writable: true,
// configurable: false
// })

// Object.defineProperty(gonzalo,"pruebaNASA", {
//     value: "extraterrestres",
//     enumerable: false,
//     writable: false,
//     configurable: false
// })

// Object.seal(gonzalo);
Object.freeze(gonzalo);

console.log(Object.getOwnPropertyDescriptors(gonzalo));
