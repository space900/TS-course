export {}

interface Todo {
    id: string,
    title: string,
    description?: string,
    completed: boolean,
    createdAt?: number,
}


// Readonly - Утилита принимает тип, делает все значения типа readonly
type ReadOnlyTodo = Readonly<Todo>

// Partial - делает все поля необязательными. '?'
type PartialTodo = Partial<Todo>
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
    return { ...todo, ...fieldsToUpdate };
}

// Required - делает все поля обязательными
type RequiredTodo = Required<Todo>