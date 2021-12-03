const initialState = {
    groups: [
        {
        id: 1,
        title: "Лабораторная №1 4-ой группы",
        status: "Завершено",
        teacherName: "Максимова А.И.",
        activeQueues: 3,
        countQueues: 4,
        countMembers: 30
        },
        {
        id: 2,
        title: "Лабораторная №2 4-ой группы",
        status: "Завершено",
        teacherName: "Максимова А.И.",
        activeQueues: 3,
        countQueues: 4,
        countMembers: 22
        }
    ]
}

export const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_GROUP":
            return {...state, groups: [...state.groups, action.group]}
        default:
            return state
    }
}