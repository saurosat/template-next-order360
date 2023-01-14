import { LoremIpsum } from "lorem-ipsum";
import { Img, Post, Product, User } from "../lib/DTO";

class DummyDataGenerator {
    initNo = 15;
    map: { [key: string]: number };
    lorem: LoremIpsum;
    constructor(initIdNumber: number) {
        this.initNo = initIdNumber;
        this.map = {};
        this.lorem = new LoremIpsum({
            sentencesPerParagraph: {
                max: 8,
                min: 4
            },
            wordsPerSentence: {
                max: 16,
                min: 4
            }
        });
    }
    generateId(prefix: string) {
        let key = prefix.toUpperCase();
        if (this.map[key] === null || this.map[key] === undefined) {
            this.map[key] = this.initNo;
        } else {
            this.map[key] = this.map[key] + 1;
        }
        console.debug(key + ": " + this.map[key] + " generated.")
        if (key.startsWith("__NO_PREFIX"))
            return this.map[key];
        return key + this.map[key];
    }

    generateImg(): Img {
        return {
            id: this.generateId("IMG"),
            info: this.lorem.generateSentences(2),
            imgUrl: "https://picsum.photos/id/" + this.map["IMG"] + "/600/400"
        } as Img;
    }
    generateImgs(num: number): Img[] {
        let imgs: Img[] = [];
        for (let i = 0; i < num; i++) {
            imgs[i] = this.generateImg();
        }
        return imgs;
    }

    generateUser(): User {
        return {
            id: this.generateId("USER"),
            firstName: this.lorem.generateWords(1),
            lastName: this.lorem.generateWords(1),
            avatar: "https://i.pravatar.cc/40?img=" + this.map["USER"]
        } as User;
    }
    generateUsers(num: number): User[] {
        let users: User[] = [];
        for (let i = 0; i < num; i++) {
            users[i] = this.generateUser();
        }
        return users;
    }

    generateProduct(imgIds: string[]): Product {
        return {
            id: this.generateId("PRODUCT"),
            title: this.lorem.generateWords(5),
            info: this.lorem.generateSentences(2),
            imgIds: [...imgIds]
        } as Product;
    }
    generateProducts(num: number, imgs: Img[]): Product[] {
        let imgsPerProduct = imgs.length / num;
        while (imgsPerProduct === 0 && num > 0) {
            num--;
            imgsPerProduct = imgs.length / num;
        }
        let products: Product[] = [];
        for (let i = 0; i < num; i++) {
            let imgIds: string[] = [];
            for (let j = 0; j < imgsPerProduct; j++) {
                imgIds[j] = imgs[imgsPerProduct * i + j].id;
            }
            products[i] = this.generateProduct(imgIds);
        }
        return products;
    }

    generatePost(user: User, product: Product): Post {
        return {
            id: this.generateId("POST"),
            userId: user.id,
            productId: product.id,
            tag: this.lorem.generateWords(1),
            title: this.lorem.generateWords(5),
            info: this.lorem.generateSentences(2),
            author: this.lorem.generateWords(1), time: "",
            imgUrl: "https://picsum.photos/id/" + product.imgIds[0].replace("IMG", "") + "/600/400"
        } as Post;
    }
    generatePosts(num: number, users: User[], products: Product[]): Post[] {
        let posts: Post[] = [];
        let userIdx = 0;
        let productIdx = 0;
        for (let i = 0; i < num; i++) {
            posts[i] = this.generatePost(users[userIdx], products[productIdx]);
            if (userIdx < users.length) userIdx++; else userIdx = 0;
            if (productIdx < products.length) productIdx++; else productIdx = 0;
        }
        return posts;
    }
    saveAsJson(objs: Object[], fileName: string) {
        const fs = require("fs");
        const json = JSON.stringify(objs, null, 4);
        try {
            fs.writeFileSync("./" + fileName, json);
        } catch (error) {
            console.log(error);
        }
    }
}

const generator = new DummyDataGenerator(9);

const imgs: Img[] = generator.generateImgs(30);
generator.saveAsJson(imgs, "images.json");

const users: User[] = generator.generateUsers(10);
generator.saveAsJson(users, "users.json");

const products = generator.generateProducts(10, imgs);
generator.saveAsJson(products, "products.json");

const posts = generator.generatePosts(10, users, products);
generator.saveAsJson(posts, "posts.json")
