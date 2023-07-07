"use strict";
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
myShape.toFixed();
const circle1 = {
    radius: 4,
    kind: ShapeKind.Circle,
};
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCode || (StatusCode = {}));
// Может в некоторых случаях быть полезнее юнионов (в случае изменения внутренних названий) (или напримере обозначения приходящих ключей с сервера, которые могут меняться)
var Grades;
(function (Grades) {
    Grades["Junior"] = "Junior";
    Grades["Middle"] = "Middle";
    Grades["Senior"] = "Senior";
})(Grades || (Grades = {}));
const dev2 = {
    level: Grades.Junior,
    login: 'space9000',
    skills: ['html', 'scss', 'python'],
};
function upGrade(user) {
    return user.level === Grades.Junior ? user.level = Grades.Middle : user.level === Grades.Middle ? user.level = Grades.Senior : '';
    /*if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    } else if (user.level === Grades.Middle) {
        user.level = Grades.Senior;
    }*/
}
