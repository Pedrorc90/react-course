import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Test in todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('should return initial state', () => { 

        const newState = todoReducer( initialState, {} )

        expect( newState ).toBe( initialState )

     })

     test('should add one todo', () => { 

        const actionAdd = {
            type: '[TODO] Add Todo',
            payload: {
                id : 2,
                description: 'Test add todo',
                done: false
            }
        }

        const newState = todoReducer( initialState, actionAdd )

        expect( newState.length ).toBe( 2 )
        expect( newState ).toContain( actionAdd.payload )

     })

     test('should remove one todo', () => { 

        const removeAdd = { type: '[TODO] Remove Todo', payload: 1 }

        const newState = todoReducer( initialState, removeAdd )

        expect( newState.length ).toBe( 0 )


     })

     test('should do the toggle done for a todo', () => { 

        const actionToggle = { type: '[TODO] Toggle Todo', payload: 1 }

        const newState = todoReducer( initialState, actionToggle )
        expect( newState[0].done ).toBeTruthy();

        const newState2 = todoReducer( newState, actionToggle )
        expect( newState2[0].done ).toBeFalsy();
        

     })
 })