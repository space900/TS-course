"use strict";
// create a function that change level of incoming developer
function gradeDeveloper(dev, newLevel) {
    dev.level = newLevel;
    // return 'junior' ? 'middle' : ('middle' ? 'senior' : 'senior');
}
const dev1 = {
    login: 'space900',
    skills: ['js', 'ts', 'react'],
    level: 'junior'
};
gradeDeveloper(dev1, 'junior');
