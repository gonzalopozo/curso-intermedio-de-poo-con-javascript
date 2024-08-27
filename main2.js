// const obj1 = {
//     a: "a",
//     b: "b",
//     c : {
//         d: "d",
//         e: "e"
//     },
//     editA() {
//         this.a = "AAAAAAA";
//     } 
// };

// const obj2 = {};
// for (prop in obj1) {
//     obj2[prop] = obj1[prop];
// }

// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);

// const stringifyCompleObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifyCompleObj);

// function recursiva() {
//     if (/* validacion */) {
//         // llamados recursivos
//     } else {
//         // llamados normales, sin recursividad
//     }
// }

function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key])
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

// const numeritos = [0,1,2,3,5,37,53,7,345,345,3,5,43,5,42,56,2,45,32,31,1,85,7,456,36,5,2345,342,543,2];

// // let numerito = 0;
// // for (let index = 0; index < numeritos.length; index++) {
// //     numerito = numeritos[index];
// //     console.log({index, numerito});
// // }

// function recursiva(arr) {
//     if (arr.length != 0) {
//         const firstNum = arr[0];
//         console.log(firstNum);
//         arr.shift();
//         return recursiva(arr);
//     }
// }

function requiredParam(param) {
    throw new Error(`${param} es obligatorio`);
}

function LearningPath({
    name = requiredParam("name"),
    courses = []
}) {
    this.name = name;
    this.courses = courses;


    // const private = {
    //     "_name": name,
    //     "_courses": courses
    // };

    // const public = {
    //     get name() {
    //         return private["_name"];
    //     },
    //     set name(newName) {
    //         if (newName.length != 0) {
    //             private["_name"] = newName;
    //         } else {
    //             console.warn("El nombre del learning path debe tener al menos 1 caracter");
                
    //         }
    //     },
    //     get courses() {
    //         return private["_courses"];
    //     }
    // };

    // return public;
}

function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.socialMedia = {
        twitter,
        instagram,
        facebook
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = [];

    if (isArray(learningPaths)) {
        for (learningPathIndex in learningPaths) {
            console.log(
                learningPaths[learningPathIndex] instanceof LearningPath
            );
            
            if (learningPaths[learningPathIndex] instanceof LearningPath) {
                this.learningPaths.push(learningPaths[learningPathIndex]); 
                console.log("a");
                
            }
        }
    }


    // const private = {
    //     "_name": name,
    //     "_learningPaths": learningPaths
    // }

    // const public = {
    //     age,
    //     email,
    //     approvedCourses,
    //     socialMedia: {
    //         twitter,
    //         instagram,
    //         facebook
    //     },
    //     get name() {
    //         return private["_name"];
    //     },
    //     set name(newName) {
    //         if (newName.length != 0) {
    //             private["_name"] = newName;
    //         } else {
    //             console.warn("Tu nombre debe tener al menos 1 caracter");
                
    //         }
    //     },
    //     get learningPaths() {
    //         return private["_learningPaths"];
    //     },
    //     set learningPaths(newLearningPath) {
    //         if (!newLearningPath.name) {
    //             console.warn("Tu learning path no tiene la propiedad name");
    //             return;
    //         }

    //         if (!newLearningPath.courses) {
    //             console.warn("Tu learning path no tiene la propiedad courses");
    //             return;
    //         }

    //         if (!isArray(newLearningPath.courses)) {
    //             console.warn("Los coureses de tu learning path no son una lista");
    //             return;
    //         }

    //         private["_learningPaths"].push(newLearningPath);
    //     }


    //     // readName() {
    //     //     return private["_name"];
    //     // },
    //     // changeName(newName) {
    //     //     private["_name"] = newName;
    //     // }
    // }

    // // Con defineProperty
    // // Object.defineProperty(public, "readName", {
    // //     writable: false,
    // //     configurable: false
    // // })

    // // Object.defineProperty(public, "changeName", {
    // //     writable: false,
    // //     configurable: false
    // // })
    
    // // Con defineProperties  
    // Object.defineProperties(public, {
    //     readName: {
    //         configurable: false,
    //         writable: false,
    //     },
    //     changeName: {
    //         configurable: false,
    //         writable: false,
    //     }
    // });

    // return public;
}

const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
    email: "juanito@frijoles.com",
    name: "Juanito",
    learningPaths: [
        escuelaWeb,
        escuelaData,
        {
            name: "Escuela del impostor",
            courses: []
        }
    ]
});

// const gonzalo2 = createStudent({
//     name: "Gonzalo",
//     age: 19,
//     email: "gonzalopozo2005@gmail.com",
//     twitter: "gonzalooo"
// });

// const gonzalo2 = createStudent({
//     name: "Gonzalo",
//     email: "correo@correo.es"
// });

// ------------

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    }
}

// const juan = deepCopy(studentBase);
// Object.seal(juan);
// console.log(Object.isSealed(juan));

// Object.defineProperty(juan, "name", {
//     value: "Juanito",
//     configurable: false
// });