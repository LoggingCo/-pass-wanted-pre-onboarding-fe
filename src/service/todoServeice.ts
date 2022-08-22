import { TodoPostType, TodoUpdateType } from 'typings/db/post.type/todo';
import { axiosApiInstance } from 'util/axios';

export default class TodoService {
    static create(data: TodoPostType) {
        const response = axiosApiInstance.post('/todos', data);
        return response;
    }
    static read() {
        const response = axiosApiInstance.get('/todos');
        return response;
    }
    static update(data: TodoUpdateType) {
        const response = axiosApiInstance.put(`/todos/${data.id}`, data.data);
        return response;
    }
    static delete(id: number) {
        const response = axiosApiInstance.delete(`/todos/${id}`);
        return response;
    }
}
