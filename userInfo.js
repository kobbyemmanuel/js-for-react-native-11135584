function createUserProfiles(namesArray, modifiedNamesArray) {
    if (namesArray.length !== modifiedNamesArray.length) {
        throw new Error("Arrays must have the same length.");
    }

    let profiles = [];

    for (let i = 0; i < namesArray.length; i++) {
        let profile = {
            originalName: namesArray[i],
            modifiedName: modifiedNamesArray[i],
            id: i + 1
        };
        profiles.push(profile);
    }

    return profiles;
}

const namesArray = ["Alice", "Bob", "Charlie", "David", "Emma"];
const modifiedNamesArray = ["alice", "BOB", "CHARLIE", "david", "emma"];
const userProfiles = createUserProfiles(namesArray, modifiedNamesArray);
console.log(userProfiles);
