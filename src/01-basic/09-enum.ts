enum ShapeKind {
    Circle,  // 0
    Square,  // 1
}

const myShape = ShapeKind.Circle;
myShape.toFixed()


// Примеры из доки
interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Shape {
    kind: ShapeKind.Square;
    sideLength: number;
}

const circle1: Circle = {
    radius: 4,
    kind: ShapeKind.Circle,
}

enum StatusCode {
    ERROR = 500,
    NOT_FOUND = 404,
    NOT_AUTH = 403
}


// Может в некоторых случаях быть полезнее юнионов (в случае изменения внутренних названий) (или напримере обозначения приходящих ключей с сервера, которые могут меняться)
enum Grades {
    Junior = 'Junior',
    Middle = 'Middle',
    Senior = 'Senior',
}

interface Dev {
    login: string,
    skills: string[],
    level: Grades,
}

const dev2: Dev = {
    level: Grades.Junior,
    login: 'space9000',
    skills: ['html', 'scss', 'python'],
}

function upGrade(user: { level: Grades }) {
    return user.level === Grades.Junior ? user.level = Grades.Middle : user.level === Grades.Middle ? user.level = Grades.Senior : '';

    /*if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    } else if (user.level === Grades.Middle) {
        user.level = Grades.Senior;
    }*/
}