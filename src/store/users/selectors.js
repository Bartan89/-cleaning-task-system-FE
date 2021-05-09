export const selectUsers = state => state.users.sort((a ,b) => b.credit - a.credit)


