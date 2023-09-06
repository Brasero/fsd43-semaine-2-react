export const selectUsers = (state) => state.user.users

export const numberOfUser = (state) => state.user.users.length

export const selectUserByName = (name) => {
    return (state) => {
        return state.user.users.filter((user) =>  user.name === name)[0] ?? {name: ''}
    }
}

export const selectCounter = (state) => state.user.counter;