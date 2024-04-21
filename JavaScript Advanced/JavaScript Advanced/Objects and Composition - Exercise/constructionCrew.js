function constructionCrew(data) {

    if (data.dizziness === true) {
        data.levelOfHydrated = data.weight * 0.1 * data.experience;
        return data;
    } else {
        return data;
    }
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));