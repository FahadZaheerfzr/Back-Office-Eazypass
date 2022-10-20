 export default (state, action) => {
    switch(action.type) {
        case 'SET_CLICK':
            return {
                fixed :!state.fixed,
            }

        default:
            return state;
    }
}