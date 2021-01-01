import axios from "axios";

const baseUrl = "http://localhost:3001/todos"

// TODOを取得する
const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

// TODOを更新する
const update = async (id, newTodo) => {
    const response = await axios.put(`${baseUrl}/${id}`, newTodo)
    return response.data
}

const _delete = async id => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
}

// TODOを追加する
const add = async newTodo => {
    const response = await axios.post(baseUrl, newTodo);
    return response.data
}


export default {getAll, update, delete: _delete, add }