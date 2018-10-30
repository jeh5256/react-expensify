import authReducer from '../../reducers/auth';

test('Should set uid on login', () => {
    const action = {
        type: 'LOGIN', 
        uid: '1234'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('Should remove uid on log out', () => {
    const action = {
        type: 'LOGOUT', 
    };
    const state = authReducer({ uid: '1234'}, action);
    expect(state).toEqual({});
});