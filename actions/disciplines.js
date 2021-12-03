export const ADD_DISCIPLINE = 'ADD_DISCIPLINE'

export const addDiscipline = (discipline) => {
    discipline.id = Math.floor(Math.random() * 100000000)
    return { type: ADD_DISCIPLINE, discipline: discipline };
}