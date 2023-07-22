console.log("call back");

const students = [
    { name: "Asghar", subject: "Java" },
    { name: "Haider", subject: "Python" }
]

function enrollstudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled " + student.name);
            // callback();
            let error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 6000);
    });
}

function getstudent() {
    setTimeout(function () {
        //    students.push(student);
        let str;
        students.forEach(function (element) {
            str += `<li>${element.name} </li>`
        });
        let showstudent = document.getElementById("showstudent");
        showstudent.innerHTML = str;
        console.log(" get students");

    }, 1000);
}

let newStudent = { name: "Azhar", subject: "C" }

enrollstudent(newStudent).then(function(){
    getstudent();
}).catch (function(){
    console.log(" error occured");
});
// getstudent();

