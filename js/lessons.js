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

    getCard() {
        let shortenDes = this.getShortenDes();
    
        let template = `
          <div id="card" class="card card-compact w-full cursor-pointer border border-solid border-gray bg-white hover:bg-white hover:drop-shadow-md">
              <figure><img src="${this.coverPic}" alt="cover_pic" class="object-cover"/></figure>
              <div class="card-body">
                  <h4 class="card-title text-lg text-ellipsis">${this.title}</h4>
                  <p text-ellipsis>${shortenDes}</p>
                  <div>
                      <p class="text-[#86909c] text-xs text-ellipsis">${this.lecturer}</p>
                      <p class="text-[#86909c] text-xs">Publish on ${this.upload_time}</p>
                  </div>
              </div>
          </div>
        `;
    
        return $(template);
    }
}