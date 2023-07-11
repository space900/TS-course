// Дан тип Developer. Как на базе него создать тип FrontendDeveloper,
// у которого все ключи будут совпадать с оригинальным Developer,
// но будут обязательными?

type LanguageLevel = 'begginer' | 'junior' | 'middle' | 'senior' | 'native';

type Developer = {
    html: LanguageLevel,
    css: LanguageLevel,
    javascript?: LanguageLevel,
    typescript?: LanguageLevel,
}

type FrontendDeveloper = Required<Developer>;


// Дан тип Developer и функция для обновления его полей.
// Как правильно задать тип для второго параметра функции updateDeveloper?

type Skill = { language: string, level: LanguageLevel }

type Developer2 = {
    id: string,
    login: string,
    level: 'junior' | 'middle' | 'senior',
    skills: Skill[]
}

function updateDeveloper(dev: Developer2, updatedFields: Partial<Developer2>) {
    return { ...dev, ...updatedFields }
}




export {}