// Доступ по индексу

export {};

interface DataModel {
    id: string,
    title: string,
    elements: {
        header: {
            title: string,
            description: string,
            links: string[]
        },
        footer: {
            description: string,
            links: string[]
        },
        body: [
            {
                title: string,
                content: {},
            },
        ],
    }
}

type T0 = DataModel['elements']['footer']

type someTuple = [number, string, boolean, ...string[]];
const arr: someTuple = [1, 'sat', true, '', '']

type T1 = someTuple[2]


const sizes = ['small', 'medium', 'large'] as const;
//  Хак, из константы получился Юнион
type T2 = typeof sizes[number]