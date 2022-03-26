export default class UnsplashAPI {
    constructor() {
        this.url = 'https://api.unsplash.com/';
        this.apiKey = "ajg8dHDGoJYcHta1PMZEqAm5L2xMPAwezKLwnc4wBgc";
        this.images = [];
    }
    async getPhotos() {
        const endPoint = `${this.url}/photos/random?client_id=${this.apiKey}&count=10`;
        this.images = [];
        await fetch(endPoint).then((res) => res.json()).then((data) => {
            this.filterData(data);
        });
    }
    filterData = (data) => {
        data.forEach((image) => {
            console.log(image.urls['full']);
            this.images.push({
                description: image.description,
                url: image.urls['full']
            });
        });
    }
}