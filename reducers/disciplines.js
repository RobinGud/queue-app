import { ADD_DISCIPLINE } from "../actions/disciplines"

const initialState = {
    disciplines: [
        {
        id: 1,
        title: "Математика",
        teacherName: "Максимова А.И.",
        activeQueues: 3,
        countGroup: 4
        },
        {
        id: 2,
        title: "Математика",
        teacherName: "Максимова А.И.",
        activeQueues: 3,
        countGroup: 4
        }
    ]
}

export const disciplinesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISCIPLINE:
            return {...state, disciplines: [...state.disciplines, action.discipline]}
        default:
            return state
    }
}