function projectsCreation(input) {
     let nameOfArchitecture = input[0];
     let projectCount = Number(input[1])

     let neededHours = projectCount * 3;
     console.log(`The architect ${nameOfArchitecture} will need ${neededHours} hours to complete ${projectCount} project/s.`);


}

projectsCreation(["George ", "4 "]);