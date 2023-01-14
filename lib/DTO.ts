export interface Product {
    id: string;
    title: string;
    info: string;
    imgIds: string[];
    imgs?: Img[];
}
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
}
export interface Img {
    id: string;
    info: string;
    imgUrl: string;
}
export interface Post {
    id: string;
    userId: string;
    user?: User;
    productId: string;
    product?: Product;
    tag: string;
    title: string;
    info: string;
    author: string;
    time: string;
    imgUrl: string;
}

export interface IPostAgent {
    /** Search {numLimit}s posts using search query returned by the 
     * query builder. If queryBuilder param is null, returned most recent posts */
    search(numLimit: number, queryBuilder?: (param: Post) => string): Post[];
    getPost(postId: string): Post;
    getProduct(postId: string): Product;
}

export const emptyPost: Post = {
    id: '',
    userId: '',
    productId: '',
    tag: '',
    title: '',
    info: '',
    author: '',
    time: '',
    imgUrl: ''
};
export const emptyProduct = {
    id: "",
    title: "",
    info: "",
    imgIds: [],
    imgs: []
};