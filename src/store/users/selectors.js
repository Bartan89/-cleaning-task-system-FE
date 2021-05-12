export const selectUsers = state => state.users.sort((a ,b) => b.credit - a.credit)


export const selectUsersAndOneDefault = state => [{name : 'Show all'}, ...state.users.sort((a ,b) => b.credit - a.credit)]


