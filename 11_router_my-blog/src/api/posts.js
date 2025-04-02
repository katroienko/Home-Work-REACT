import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const getAllPosts = async ()=> {
    const {data} = await postsInstance.get("/");
    return data;
}

export const getPostById = async id => {
    const {data} = await postsInstance.get(`/${id}`);
    return data;
}