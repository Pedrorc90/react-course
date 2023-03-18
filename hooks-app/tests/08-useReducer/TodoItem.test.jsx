const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");


describe('Test in <TodoItem />', () => {

    const todo = {
        id: 1, 
        description: 'Piedra del alma',
        done: false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() )

    test('Should show the pending todo', () => {

        render( <TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } /> )

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect ( spanElement.className ).toContain('align-self-center')
        expect ( spanElement.className ).not.toContain('text-decoration-line-through')
    })

    test('Should show the completed todo', () => {

        todo.done = true;

        render( <TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } /> )

        const spanElement = screen.getByLabelText('span');
        expect ( spanElement.className ).toContain('text-decoration-line-through')
    })

    test('Should call onToggleTodo when a click is done', () => {


        render( <TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } /> )
        const spanElement = screen.getByLabelText('span');

        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
        
    })

    test('Should call onRemoveTodo when a click is done', () => {


        render( <TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } /> )
        const buttonElement = screen.getByRole('button');

        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
        
    })
})