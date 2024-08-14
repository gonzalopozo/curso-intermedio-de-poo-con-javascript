const obj1 = {
    a: "a",
    b: "b",
    c : {
        d: "d",
        e: "e"
    },
    editA() {
        this.a = "AAAAAAA";
    } 
};

// const obj2 = {};
// for (prop in obj1) {
//     obj2[prop] = obj1[prop];
// }

// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);

const stringifyCompleObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifyCompleObj);