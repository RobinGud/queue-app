export const ADD_QUEUE = 'ADD_QUEUE'

export const addQueue = (queue) => {
    queue.id = Math.floor(Math.random() * 100000000)
    queue.status = "запланировано"
    return { type: ADD_QUEUE, queue: queue };
}