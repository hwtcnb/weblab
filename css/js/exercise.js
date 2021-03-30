var Student = {
    name: 'Ilya',
    surname: 'Shevchenko',
    course: 2,
    age: 18,
    GetOlder: function () {
        this.age = this.age + Number(prompt('Enter how much older you want to be: '));
    },
    ChangeSurname: function () {
        this.surname = prompt('Enter new surname: ');
    },
    MoveToSecondCourse: function () {
        this.course += 1;
        alert('Your are on the next course!');
    }
}

function exercise() {
    arr = prompt('Enter your text').toLowerCase().split(' ')
    arr.sort()
    for (let index = 0; index < arr.length; index++) {
        document.writeln(arr[index])
    }
}

document.writeln(Student.age)
document.writeln(Student.surname)
document.writeln(Student.course)

Student.GetOlder()
Student.ChangeSurname()
Student.MoveToSecondCourse()
document.writeln('>>>')

document.writeln(Student.age)
document.writeln(Student.surname)
document.writeln(Student.course)


exercise()