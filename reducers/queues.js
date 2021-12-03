import { ADD_QUEUE } from "../actions/queues"

const initialState = {
    queues: [
        {
        id: 1,
        title: "Лабораторная работа 5",
        status: "активно",
        teacherName: "Максимова А.И.",
        countStudents: 30,
        date: "12.12.21",
        beginTime: "9:00",
        endTime: "15:00",
        queueMembers: [
            {
                id: 1,
                number: 1,
                fullname: "Павел Иванов"
            },
            {
                id: 2,
                number: 2,
                fullname: "Дарья Петрова"
            }
        ]},
        {
        id: 2,
        title: "Лабораторная работа 6",
        status: "активно",
        teacherName: "Максимова А.И.",
        countStudents: 30,
        date: "31.12.21",
        beginTime: "9:00",
        endTime: "15:00",
        queueMembers: [
            {
                id: 1,
                number: 1,
                fullname: "Павел Иванов"
            },
            {
                id: 2,
                number: 2,
                fullname: "Дарья Петрова"
            }
        ]}
    ]
}

export const queuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUEUE:
            return {...state, queues: [...state.queues, action.queue]}
        default:
            return state
    }
}