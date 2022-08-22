import axios from 'axios';
import { UserDataType } from 'typings/db/post.type/user';
import { axiosApiInstance } from 'util/axios';

export default class UserSerivce {
    static login(data: UserDataType) {
        const response = axiosApiInstance.post('/auth/signin', data);
        return response;
    }

    static signUp(data: UserDataType) {
        const response = axiosApiInstance.post('/auth/signup', data);
        return response;
    }
}
