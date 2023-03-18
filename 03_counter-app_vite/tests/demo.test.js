
describe('Pruebas en <DemoComponent />',  () => {
    test('This proof shouldnt fail', () => {

        // 1. Initialization
        const message1 = 'Hello world';
    
        // 2. Estimulate
        const message2 = message1.trim();
    
        // 3. Watch the expected behaviour
        expect( message1 ).toBe( message2 );
    
    });
})

