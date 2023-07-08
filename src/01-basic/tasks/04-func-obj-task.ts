interface User {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
}

const user1: User = {
    login: 'space900',
    email: 'space900@space.com',
    password: '12345',
    isOnline: false,
    lastVisited: new Date(2023, 7, 4),
}

interface Admin {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
    role: string;
}

const admin1: Admin = {
    login: 'space900',
    email: 'space900@space.com',
    password: '12345',
    isOnline: false,
    lastVisited: new Date(2023, 7, 4),
    role: 'SuperUser',
}

function login(user: {login: string, password: string, }) {
    if (user.login.length > 0, user.password.length > 0) {
        console.log(`Nice to see you, ${user.login}!`)
    }
}