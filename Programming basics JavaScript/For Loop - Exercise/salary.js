function salary(input) {

    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let tax = 0;

    for (let i = 1; i <= tabs; i++) {
        let openPage = input[index];
        index++;

        switch (openPage) {
            case "Facebook":
                tax += 150;
                break;
            case "Instagram":
                tax += 100;
                break;
            case "Reddit":
                tax += 50;
                break;
        }
    }

    salary -= tax

    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])

