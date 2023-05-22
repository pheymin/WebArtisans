export class Lesson {
    constructor(data) {
        this.data = data;
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.lecturer = data.lecturer;
        this.coverPic = data.coverPic;
        this.upload_time = data.upload_time;
    }

    getShortenDes() {
        const maxDes = 90;
        let shortenDes = this.description;

        if (shortenDes.length > maxDes) {
            shortenDes = shortenDes.substr(0, maxDes) + '...';
        }

        return shortenDes;
    }
}