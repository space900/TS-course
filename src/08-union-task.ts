type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login: string,
    skills: string[],
    level: Level,
}

// create a function that change level of incoming developer
function gradeDeveloper(dev: {level: Level}, newLevel: Level ) {
   dev.level = newLevel;
    // return 'junior' ? 'middle' : ('middle' ? 'senior' : 'senior');
}

const dev1: Developer = {
    login: 'space900',
    skills: ['js', 'ts', 'react'],
    level: 'junior'
}

gradeDeveloper(dev1, 'junior');