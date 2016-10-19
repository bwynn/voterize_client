export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function vote(entry) {
    return {
        meta: {remote: true},
        type: 'VOTE',
        state
    };
}

export function next() {
    return {
        meta: {remote: true},
        type: 'NEXT'
    };
}
