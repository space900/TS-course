"use strict";
const user1 = {
    login: 'space900',
    email: 'space900@space.com',
    password: '12345',
    isOnline: false,
    lastVisited: new Date(2023, 7, 4),
};
const admin1 = {
    login: 'space900',
    email: 'space900@space.com',
    password: '12345',
    isOnline: false,
    lastVisited: new Date(2023, 7, 4),
    role: 'SuperUser',
};
function login(user) {
    if (user.login.length > 0, user.password.length > 0) {
        console.log(`Nice to see you, ${user.login}!`);
    }
}
