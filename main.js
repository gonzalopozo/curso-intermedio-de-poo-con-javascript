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

console.log(Object.getOwnPropertyDescriptors(gonzalo));

Object.defineProperty(gonzalo,"pruebaNASA", {
    value: "extraterrestres",
    enumerable: true,
    writable: true,
    configurable: true
})