"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var lorem_ipsum_1 = require("lorem-ipsum");
var DummyDataGenerator = /** @class */ (function () {
    function DummyDataGenerator(initIdNumber) {
        this.initNo = 15;
        this.initNo = initIdNumber;
        this.map = {};
        this.lorem = new lorem_ipsum_1.LoremIpsum({
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
    DummyDataGenerator.prototype.generateId = function (prefix) {
        var key = prefix.toUpperCase();
        if (this.map[key] === null || this.map[key] === undefined) {
            this.map[key] = this.initNo;
        }
        else {
            this.map[key] = this.map[key] + 1;
        }
        console.debug(key + ": " + this.map[key] + " generated.");
        if (key.startsWith("__NO_PREFIX"))
            return this.map[key];
        return key + this.map[key];
    };
    DummyDataGenerator.prototype.generateImg = function () {
        return {
            id: this.generateId("IMG"),
            info: this.lorem.generateSentences(2),
            imgUrl: "https://picsum.photos/id/" + this.map["IMG"] + "/600/400"
        };
    };
    DummyDataGenerator.prototype.generateImgs = function (num) {
        var imgs = [];
        for (var i = 0; i < num; i++) {
            imgs[i] = this.generateImg();
        }
        return imgs;
    };
    DummyDataGenerator.prototype.generateUser = function () {
        return {
            id: this.generateId("USER"),
            firstName: this.lorem.generateWords(1),
            lastName: this.lorem.generateWords(1),
            avatar: "https://i.pravatar.cc/40?img=" + this.map["USER"]
        };
    };
    DummyDataGenerator.prototype.generateUsers = function (num) {
        var users = [];
        for (var i = 0; i < num; i++) {
            users[i] = this.generateUser();
        }
        return users;
    };
    DummyDataGenerator.prototype.generateProduct = function (imgIds) {
        return {
            id: this.generateId("PRODUCT"),
            title: this.lorem.generateWords(5),
            info: this.lorem.generateSentences(2),
            imgIds: __spreadArray([], imgIds, true)
        };
    };
    DummyDataGenerator.prototype.generateProducts = function (num, imgs) {
        var imgsPerProduct = imgs.length / num;
        while (imgsPerProduct === 0 && num > 0) {
            num--;
            imgsPerProduct = imgs.length / num;
        }
        var products = [];
        for (var i = 0; i < num; i++) {
            var imgIds = [];
            for (var j = 0; j < imgsPerProduct; j++) {
                imgIds[j] = imgs[imgsPerProduct * i + j].id;
            }
            products[i] = this.generateProduct(imgIds);
        }
        return products;
    };
    DummyDataGenerator.prototype.generatePost = function (user, product) {
        return {
            id: this.generateId("POST"),
            userId: user.id,
            productId: product.id,
            tag: this.lorem.generateWords(1),
            title: this.lorem.generateWords(5),
            info: this.lorem.generateSentences(2),
            author: this.lorem.generateWords(1), time: "",
            imgUrl: "https://picsum.photos/id/" + product.imgIds[0].replace("IMG", "") + "/600/400"
        };
    };
    DummyDataGenerator.prototype.generatePosts = function (num, users, products) {
        var posts = [];
        var userIdx = 0;
        var productIdx = 0;
        for (var i = 0; i < num; i++) {
            posts[i] = this.generatePost(users[userIdx], products[productIdx]);
            if (userIdx < users.length)
                userIdx++;
            else
                userIdx = 0;
            if (productIdx < products.length)
                productIdx++;
            else
                productIdx = 0;
        }
        return posts;
    };
    DummyDataGenerator.prototype.saveAsJson = function (objs, fileName) {
        var fs = require("fs");
        var json = JSON.stringify(objs, null, 4);
        try {
            fs.writeFileSync("./" + fileName, json);
        }
        catch (error) {
            console.log(error);
        }
    };
    return DummyDataGenerator;
}());
var generator = new DummyDataGenerator(9);
var imgs = generator.generateImgs(30);
generator.saveAsJson(imgs, "images.json");
var users = generator.generateUsers(10);
generator.saveAsJson(users, "users.json");
var products = generator.generateProducts(10, imgs);
generator.saveAsJson(products, "products.json");
var posts = generator.generatePosts(10, users, products);
generator.saveAsJson(posts, "posts.json");
