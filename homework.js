
function findGradeLevel(name, marks) {
    if (marks < 0 || marks > 100) {
        console.log("Invalid marks");
    }
    else if (marks >= 90 && marks <= 100) {
        console.log(name + ", you have received S grade");
    }
    else if (marks >= 80 && marks < 90) {
        console.log(name + ", you have received A grade");
    }
    else if (marks >= 70 && marks < 80) {
        console.log(name + ", you have received B grade");
    }
    else if (marks >= 60 && marks < 70) {
        console.log(name + ", you have received C grade");
    }
    else if (marks >= 50 && marks < 60) {
        console.log(name + ", you have received D grade");
    }
    else {
        console.log(name + ", you have failed")
    }
}

findGradeLevel("John",-3);
findGradeLevel("Bob",115);
findGradeLevel("Max",90);
findGradeLevel("Jack",80);
findGradeLevel("David",70);
findGradeLevel("William",60);
findGradeLevel("Thomas",50);
findGradeLevel("Henry",49);