function softUniStudents(input) {

    const students = {};

    for (const line of input) {

        if (line.includes(':')) {
            let [courseName, courseCapacity] = line.split(': ');
            courseCapacity = Number(courseCapacity);

            if (!students.hasOwnProperty(courseName)) {
                students[courseName] = {
                    courseCapacity,
                    studentsInformation: [],
                }
            } else {
                students[courseName].courseCapacity += courseCapacity;
            }
        } else {
            let [username, creditsCount] = line
                .replace('[', '&')
                .replace(']', '&')
                .split('&');
            creditsCount = Number(creditsCount);
            let elements = line.split(' with email ').splice(1, 1).join('');
            let [email, courseName] = elements.split(' joins ');

            if (students.hasOwnProperty(courseName) && students[courseName].courseCapacity > 0) {
                students[courseName].studentsInformation.push({ username, creditsCount, email, });
                students[courseName].courseCapacity--;
            }

        }
    }

    let sorted = Object.entries(students).sort((a, b) => b[1].studentsInformation.length - a[1].studentsInformation.length);

    for (const line of sorted) {
        console.log(`${line[0]}: ${students[line[0]].courseCapacity} places left`);
        line[1].studentsInformation.sort((a, b) => b.creditsCount - a.creditsCount).forEach(x => {
            console.log(`--- ${x.creditsCount}: ${x.username}, ${x.email}`);
        });

    }
}

softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);