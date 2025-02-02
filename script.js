let whats = document.querySelector(".whatshappening .content");
let input = document.querySelector(".whatshappening .content input");
let postbtn = document.querySelector(".whatshappening .content .icons1 button");
let icons1 = document.querySelector(".whatshappening .content .icons1");
let btns = document.querySelectorAll(".btn");
let posts = document.querySelector(".posts");
let flag = false;
let newHTML = `<button class="everyone w-fit flex items-center gap-x-2 px-2 py-0 mb-1 rounded-full hover:bg-[rgb(3,16,24)]">
                        <img src="./svgs_imgs/globe.svg" alt="globe" class="w-5 h-5 cursor-pointer">
                        <span class="text-[rgb(29,155,240)] text-[14px] font-bold">Everyone can reply</span>
                </button>
                <div class="h-[1px] bg-[#2D3134]"></div>`;
whats.addEventListener("click", ()=> {
    if(flag===true){
        return;
    }
    let newContent = document.createElement("div");
    newContent.innerHTML = newHTML;
    whats.insertBefore(newContent,icons1);
    flag = true;
})

// Enable/Disable post button based on input content
input.addEventListener("input", () => {
    if (input.value.trim().length != 0) {
        postbtn.style.backgroundColor = "white";
        postbtn.style.cursor = "pointer";
    } else {
        postbtn.style.backgroundColor = "";
        postbtn.style.cursor = "default";
    }
});

// Function to create and add a post
function createPost() {
    let createdAt = new Date(); // Get the current time
    let Post = `<div class="post flex gap-x-2 450:m-4 m-7 cursor-pointer">
        <img src="./svgs_imgs/pfp.jpg" alt="pfp" class="w-10 h-10 rounded-full">
        <div class="flex flex-col gap-y-3 w-full">
            <div class="flex w-full items-center justify-between">
                <div class="flex 450:flex-row flex-col justify-center 450:items-center gap-x-2">
                    <div class="account_verified flex items-center gap-x-1">
                        <h1 class="text-[15px] font-bold hover:underline">Shinjan Saha</h1>
                        <img src="./svgs_imgs/verified.svg" alt="verified" class="w-5 h-5">
                    </div>
                    <span class="post-time text-[15px] font-light text-[rgb(113,118,123)]" data-created-at="${createdAt}">@ShinjanS57336 . Just now</span>
                </div>
                <img src="./svgs_imgs/more3.svg" alt="more" class="more w-5 h-5">
            </div>
            <span>${input.value.trim()}</span>
            <div class="icons2 flex items-center gap-x-6 justify-between">
                <div class="icon1 flex items-center">
                    <img src="./svgs_imgs/reply.svg" alt="reply" class="w-5 h-5">
                    <span class="text-[13px] font-light">0</span>
                </div>
                <div class="icon2 flex items-center gap-x-1">
                    <img src="./svgs_imgs/repost.svg" alt="repost" class="w-5 h-5">
                    <span class="text-[13px] font-light">0</span>
                </div>
                <div class="icon3 flex items-center gap-x-1">
                    <img src="./svgs_imgs/like.svg" alt="like" class="w-5 h-5">
                    <span class="text-[13px] font-light">0</span>
                </div>
                <div class="icon4 flex items-center gap-x-1">
                    <img src="./svgs_imgs/view.svg" alt="view" class="w-5 h-5">
                    <span class="text-[13px] font-light">0</span>
                </div>
                <div class="icons5 flex items-center gap-x-2">
                    <img src="./svgs_imgs/bookmark.svg" alt="bookmark" class="w-5 h-5 hidden 310:block">
                    <img src="./svgs_imgs/share.svg" alt="share" class="w-8 h-8 310:w-5 310:h-5">
                </div>
            </div>
        </div>
    </div>
    <div class="h-[1px] bg-[#2D3134]"></div>`;

    let newPost = document.createElement("div");
    newPost.innerHTML = Post;
    posts.insertBefore(newPost, posts.children[0]);
    input.value = ""; // Clear input field after posting
    postbtn.style.backgroundColor = "";
    postbtn.style.cursor = "default";
}

// Event listener for "click" on the post button
postbtn.addEventListener("click", () => {
    if (input.value.trim().length != 0) {
        createPost(); // Create post when button is clicked
    }
});

// Event listener for "keydown" on the input field (Enter key)
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && input.value.trim().length != 0) {
        createPost(); // Create post when Enter key is pressed
    }
});


btns.forEach(btn => {
    // Add click event listener to toggle between "Follow" and "Following"
    btn.addEventListener("click", () => {
        if (btn.innerText === "Follow") {
            // Change to "Following" when clicked
            btn.innerText = "Following";
            btn.style.color = "white";
            btn.style.border = "1px solid rgb(46, 55, 62)";
            btn.style.backgroundColor = "black";
        } else if (btn.innerText === "Unfollow" || btn.innerText === "Following") {
            // Change to "Follow" when clicked
            btn.innerText = "Follow";
            btn.style.color = "black";
            btn.style.backgroundColor = "white";
        }
    });

    // Add hover effect for "Following" button state (when hovering over the button)
    btn.addEventListener("mouseenter", () => {
        if (btn.innerText === "Following") {
            btn.innerText = "Unfollow";
            btn.style.color = "rgb(182, 65, 80)";
            btn.style.border = "1px solid rgb(89, 65, 67)";
            btn.style.backgroundColor = "rgb(43, 36, 39)";
        }
    });

    // Restore text to "Following" when mouse leaves (if it was changed to "Unfollow")
    btn.addEventListener("mouseleave", () => {
        if (btn.innerText === "Unfollow") {
            btn.innerText = "Following";
            btn.style.color = "white";
            btn.style.border = "1px solid rgb(46, 55, 62)";
            btn.style.backgroundColor = "black";
        }
    });
});




// Listen for the scroll event
window.addEventListener('scroll', () => {

    const bottomNav = document.querySelector(".bottom-nav");
    const topNav = document.querySelector(".top-nav");
    // Get the total page height
    const scrollPosition = window.scrollY;

    // Check if the page has been scrolled
    if (scrollPosition  > 0) {
        bottomNav.style.opacity = "0.9"; // Add white background class
        topNav.style.transform = "translateY(-100%)";
    } else {
        bottomNav.style.opacity = "1"; // Remove white background class
        topNav.style.transform = "translateY(0%)";
}});

function updatePostTime() {
    // Get all the post time elements
    const posts = document.querySelectorAll('.post-time');

    posts.forEach(post => {
        // Get the created-at timestamp from the data attribute
        const createdAt = new Date(post.getAttribute('data-created-at')); 
        const now = new Date(); // Get the current time

        // Calculate the time difference in seconds
        const diffInSeconds = Math.floor((now - createdAt) / 1000); // No need for +60

        let timeString = '';

        // Function to format time difference
        const formatTime = (value, unit) => `${value} ${unit}${value > 1 ? 's' : ''} ago`;

        // Calculate time difference based on the unit
        if (diffInSeconds < 3600) { // Less than an hour
            const minutes = Math.floor(diffInSeconds / 60);
            timeString = formatTime(minutes, 'minute');
        } else if (diffInSeconds < 86400) { // Less than a day
            const hours = Math.floor(diffInSeconds / 3600);
            timeString = formatTime(hours, 'hour');
        } else if (diffInSeconds < 604800) { // Less than a week
            const days = Math.floor(diffInSeconds / 86400);
            timeString = formatTime(days, 'day');
        } else if (diffInSeconds < 2629746) { // Less than a month (~30 days)
            const weeks = Math.floor(diffInSeconds / 604800);
            timeString = formatTime(weeks, 'week');
        } else if (diffInSeconds < 31556952) { // Less than a year (~365 days)
            const months = Math.floor(diffInSeconds / 2629746);
            timeString = formatTime(months, 'month');
        } else { // More than a year
            const years = Math.floor(diffInSeconds / 31556952);
            timeString = formatTime(years, 'year');
        }

        // Update the time part of the post-time text
        post.innerText = post.innerText.split(' .')[0] + ' . ' + timeString;
    });
}

// Update the post time every minute (60000 ms)
setInterval(updatePostTime, 60000);

// Initial time update for all posts when the page loads
updatePostTime();


const loadRandomPosts = async()=> {
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    let response = await fetch(`http://localhost:3000/posts?count=${randomNumber}`);
    let data = await response.json();

    for(i=0; i<data.length; i++){
        let createdAt = data[i].timestamp; // Get the current time
        let Post = `<div class="post flex gap-x-2 450:m-4 m-7 cursor-pointer">
        <img src=${data[i].profile_pic} alt="pfp" class="w-10 h-10 rounded-full">
        <div class="flex flex-col gap-y-3 w-full">
            <div class="flex w-full items-center justify-between">
                <div class="flex 450:flex-row flex-col justify-center 450:items-center gap-x-2">
                    <div class="account_verified flex items-center gap-x-1">
                        <h1 class="text-[15px] font-bold hover:underline">${data[i].handle.replace("@","")}</h1>
                        <img src="./svgs_imgs/verified.svg" alt="verified" class="w-5 h-5">
                    </div>
                    <span class="post-time text-[15px] font-light text-[rgb(113,118,123)]" data-created-at="${createdAt}">${data[i].handle} . ${setTimeout(()=> {updatePostTime(createdAt)},150)}</span>
                </div>
                <img src="./svgs_imgs/more3.svg" alt="more" class="more w-5 h-5">
            </div>
            <span>${data[i].post_text}</span>
            <div class="icons2 flex items-center gap-x-6 justify-between">
                <div class="icon1 flex items-center">
                    <img src="./svgs_imgs/reply.svg" alt="reply" class="w-5 h-5">
                    <span class="text-[13px] font-light">${data[i].replies}</span>
                </div>
                <div class="icon2 flex items-center gap-x-1">
                    <img src="./svgs_imgs/repost.svg" alt="repost" class="w-5 h-5">
                    <span class="text-[13px] font-light">${data[i].reposts}</span>
                </div>
                <div class="icon3 flex items-center gap-x-1">
                    <img src="./svgs_imgs/like.svg" alt="like" class="w-5 h-5">
                    <span class="text-[13px] font-light">${data[i].likes}</span>
                </div>
                <div class="icon4 flex items-center gap-x-1">
                    <img src="./svgs_imgs/view.svg" alt="view" class="w-5 h-5">
                    <span class="text-[13px] font-light">${data[i].views}</span>
                </div>
                <div class="icons5 flex items-center gap-x-2">
                    <img src="./svgs_imgs/bookmark.svg" alt="bookmark" class="w-5 h-5 hidden 310:block">
                    <img src="./svgs_imgs/share.svg" alt="share" class="w-8 h-8 310:w-5 310:h-5">
                </div>
            </div>
        </div>
    </div>
    <div class="h-[1px] bg-[#2D3134]"></div>`;
    let newPost2 = document.createElement("div");
    newPost2.innerHTML = Post;
    posts.insertBefore(newPost2, posts.children[0]);
    }

    // logic to sort posts based on timestamp
    // const postTime = document.querySelectorAll(".post-time");
    // let timeStamp = [];
    // for(i=0; i<postTime.length; i++){
    //     timeStamp.push(postTime[i].getAttribute("data-created-at"));
    // }
    // timeStamp.sort((a, b) => new Date(b) - new Date(a));
    // let postChildren = document.querySelectorAll(".post");
    // console.log(postChildren);
    // posts.innerHTML = "";
    // for (let i = 0; i < timeStamp.length; i++) {
    //     for (let j = 0; j < postChildren.length; j++) {
    //         const postTimestamp = postChildren[j].querySelector(".post-time").getAttribute("data-created-at");
    
    //         // When we find the matching timestamp, append the post and break out of the loop
    //         if (postTimestamp === timeStamp[i]) {
    //             posts.appendChild(postChildren[j]);
    //             break; // Once the post is appended, we don't need to check this post again
    //         }
    //     }
    // }
    
}

loadRandomPosts();
