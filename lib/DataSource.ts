import imgs from "../test/images.json";
import posts from "../test/posts.json";
import products from "../test/products.json";
import users from "../test/users.json";
import { emptyPost, emptyProduct, Img, Post, Product, User } from "./DTO";

class DummyData {
    //dir = "test";
    //path = require("path");
    constructor() {
        //this.dir = this.path.resolve(process.cwd(), this.dir);
    }
    /**
    readJson(fileName: string): Object[] {
        const fs = require("fs");
        try {
            let data = fs.readFileSync(this.path.join(this.dir, fileName), 'utf8');
            let objs = JSON.parse(data);
            console.debug(objs);
            return objs;
        } catch (error) {
            console.error(error);
            return [];
        }
    } */
    getPost(id: string, loadAll?: boolean): Post {
        let posts: Post[] = this.posts;
        let matched: Post = emptyPost;
        for (let index = 0; index < posts.length && matched === emptyPost; index++) {
            const post = posts[index];
            if (post.id == id) {
                matched = post;
            }
        }
        if (matched !== emptyPost && loadAll) {
            matched.product = this.getProduct(matched.productId, true);
            let imgUrl = matched.product?.imgs?.at(0)?.imgUrl;
            if (imgUrl === undefined) {
                imgUrl = "https://picsum.photos/600/400";
            }
            matched.imgUrl = imgUrl;
        }
        return matched;
    }
    getProduct(id: string, loadAll?: boolean) {
        let products = this.products;
        console.log(products);
        let matched: Product = emptyProduct;
        for (let index = 0; index < products.length && matched === emptyProduct; index++) {
            const product = products[index];
            if (product.id == id) {
                matched = product;
            }
        }
        if (matched !== emptyProduct && loadAll) {
            matched.imgs = this.getImages(matched.imgIds);
        }
        console.log("productId: " + id);
        console.log(matched);
        return matched;
    }
    getImages(imgIds: string[]) {
        let imgs = this.images;
        let matches: Img[] = [];
        for (let index = 0; index < imgs.length; index++) {
            const img = imgs[index];
            if (imgIds.includes(img.id)) {
                matches.push(img);
            }
        }
        return matches;
    }
    get posts(): Post[] {
        return [...posts];//this.readJson("../test/posts.json") as Post[];
    }
    get products(): Product[] {
        return [...products]; //this.readJson("../test/products.json") as Product[];
    }
    get images(): Img[] {
        return [...imgs];//this.readJson("../test/images.json") as Img[];
    }
    get users(): User[] {
        return [...users];//[this.readJson("../test/users.json") as User[]];
    }
}
export default DummyData;

export const postData = new DummyData();
