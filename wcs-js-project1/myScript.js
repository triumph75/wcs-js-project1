function function1(age) {
    console.log("Lookiing for age " + age);
    var listOfStudent = [{ name: 'John', Age: 18 }, { name: 'Robert', Age: 32 }];
    var nameFound = ""
    var i = 0

    while (i < listOfStudent.length) {
        if (listOfStudent[i].Age == age) {
            console.log(listOfStudent[i].name + " is " + listOfStudent[i].Age + " old");
            nameFound = listOfStudent[i].name;

        } else {
            console.log(listOfStudent[i].name + " is  not " + age + " old");
        }
        i = i + 1;
    }

    for (let index = 0; index < listOfStudent.length; index++) {
        const element = listOfStudent[index];
        console.log(element);

    }
    //document.getElementById("myResult").value = nameFound.toUpperCase()
    document.getElementById("myResult").value = nameFound.toUpperCase()
    return nameFound;

}

console.log("You enter the JS script\n");
//text2Display = "Hello World\n"

//console.log(text2Display)
var nameFound = function1(12);

console.log("Student found " + nameFound + "\n");
console.log("You leaving the JS script\n");