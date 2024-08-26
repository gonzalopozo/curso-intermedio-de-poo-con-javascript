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

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}) {
    return {
        name,
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook
        }
    };
}

// const gonzalo2 = createStudent({
//     name: "Gonzalo",
//     age: 19,
//     email: "gonzalopozo2005@gmail.com",
//     twitter: "gonzalooo"
// });

const gonzalo2 = createStudent({
    name: "Gonzalo",
    email: "correo@correo.es"
});