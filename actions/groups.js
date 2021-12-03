export const ADD_GROUP = 'ADD_GROUP'

export const addGroup = (group) => {
    group.id = Math.floor(Math.random() * 100000000)
    return { type: ADD_GROUP, group: group };
}