const users = [
    { name: "Alice", balance: 2500, friends: ["Bob", "Charlie"], skills: ["html", "css"] },
    { name: "Bob", balance: 1500, friends: ["Alice", "David"], skills: ["javascript", "html"] },
    { name: "Charlie", balance: 3000, friends: ["Alice"], skills: ["css", "c++"] },
];

function getTotalBalance(users) {
    return users.reduce((sum, user) => sum + user.balance, 0);
}

function getFriendsWithName(users, name) {
    return users.filter((user) => user.friends.includes(name)).map(user => user.name);
}

function getNamesSortedByFriendsCount(users) {
    return users.map((user) => user.name).sort((a, b) => users.find((user) => user.name === a).friends.length - users.find((user) => user.name === b).friends.length);
}

function getUniqueSkills(users) {
    const allSkills = [];
    users.forEach((user) => {
        user.skills.forEach(skill => {
            if (!allSkills.includes(skill)) {
                allSkills.push(skill);
            }
        });
    });
    return allSkills.sort();
}

const totalBalance = getTotalBalance(users);
const friendsOfAlice = getFriendsWithName(users, "Alice");
const namesSortedByFriends = getNamesSortedByFriendsCount(users);
const uniqueSkills = getUniqueSkills(users);
