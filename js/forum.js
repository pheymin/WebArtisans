var date = new Date();
var datetime = $("#forum-datetime");
var datestring = date.toDateString().replace(" ", ", ");
datetime.text(datestring);

var likeContainer = $(".like-icon");
likeContainer.hover(function () {
    $(this.children[0]).toggleClass("fa-bounce");
});

likeContainer.on("click", function () {
    $(this.children[0]).toggleClass("fa-solid");
    $(this.children[0]).toggleClass("text-red-500");

    //plus one or minus one to children[1]
    var likeCount = $(this.children[1]).text();
    var likeCountInt = parseInt(likeCount);
    if ($(this.children[0]).hasClass("fa-solid")) {
        $(this.children[1]).text(likeCountInt + 1);
    } else {
        $(this.children[1]).text(likeCountInt - 1);
    }
});

var commentContainer = $(".comment-icon");
commentContainer.hover(function () {
    $(this.children[0]).toggleClass("fa-bounce");
});

commentContainer.on("click", function () {
    var data = $(this).parent().parent().parent().data("id");
    appendCommentModal(data);
    console.log(data);
});

var forumTextarea = $("#txt-create-post");
var createButton = $("#btn-create-post");

createButton.on("click", function () {
    var content = forumTextarea.val();
    var title = content.split("\n")[0];
    content = content.replace(title, "");
    content = content.replaceAll("\n", "");
    createNewPost(title, content);
});

const cardContainer = $(".forum-card-container");
var cardNum = cardContainer.children().length;

function createNewPost(title, content) {
    //convert date to format: YYYY-MM-DD HH:MM:SS, time zone is Malaysia
    let date = new Date();
    date.setHours(date.getHours() + 8);
    let datestring = date.toISOString().slice(0, 19).replace("T", " ");

    var post = {
        name: "Vite",
        title: title,
        content: content,
        date: datestring,
        like: 0,
        comment: 0,
    };

    appendPostOnTop(post);
    
    // $.ajax({
    //     url: "../php/createPost.php",
    //     type: "POST",
    //     data: post,
    //     success: function (result) {
    //         console.log(result);
    //     }
    // });
}

function appendPostOnTop(post){

    var datestring = new Date(post.date).toDateString().replace(" ", ", ");
    datestring = datestring.substring(4);  
    if(datestring[0] == " ") datestring = datestring.substring(1);
    datestring = datestring.substring(0, datestring.length-5) + "," + datestring.substring(datestring.length-5);
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? "PM" : "AM";
    var time = hour + ":" + minute + " " + ampm;
    post.date = datestring + " " + time;

    
    var newPost = `
        <div class="forum-card" data-id="${cardNum+1}">
            <div class="flex flex-col box-border mb-6 py-5 px-7 rounded-lg shadow-lg bg-[#f5e8ff]">
                <div class="inline-flex">
                    <img src="https://dummyimage.com/106x106" id="user-profile" alt="profile"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                    <div class="flex flex-col ml-4">
                        <h3 class="text-sm text-[#272e3b] font-semibold">${post.name}</h3>
                        <span class="text-xs text-[#4e5969]">${post.date}</span>
                        <h5 class="font-semibold text-lg my-2 text-[#1d2129]">${post.title}</h5>
                        <p class="text-sm">${post.content}</p>
                    </div>
                </div>
                <div class="inline-flex pl-16 pr-4 mt-4 justify-between">
                    <div class="like-icon text-sm text-gray-500 cursor-pointer">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <span class="ml-1">${post.like}</span>
                    </div>
                    <span class="comment-icon cursor-pointer hover:text-[#6aa1ff] text-sm text-gray-500">
                        <i class="fa-regular fa-comment-dots ml-3"></i>
                        <span class="ml-1">${post.comment} comments</span>
                    </span>
                </div>
            </div>
        </div>
    `

    cardContainer.prepend(newPost);
    forumTextarea.val("");
}


const commentModal = `
    <div id="the-modal" class="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <div class="bg-white w-1/3 p-5 rounded-b">
            <div class="flex flex-col items-center">
                <div class="text-base font-normal text-[#4e5969]">Content</div>
            </div>
            <div class="flex flex-row justify-center mt-3">
                <button id="confirm-btn" 
                    class=" border-2 border-gray-300 shadow-sm hover:bg-[#f7f8fa] font-base font-medium text-[#4e5969] cursor-pointer w-72 h-12 rounded-lg mt-5"
                >
                    OK
                </button>
            </div>
        </div>
    </div>                           
`

function appendCommentModal(){
    $("body").append(commentModal);
    $("#confirm-btn").on("click", function(){
        $("#the-modal").remove();
    });
}