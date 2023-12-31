let notVal = document.querySelector(".not-value");
let markBtn = document.querySelector(".mark");
let notification = document.getElementsByClassName("notification");
let info = document.getElementsByClassName("info");
let badge;

let unread = [];

unread.push(notification[0], notification[1], notification[2]);

notVal.innerHTML = unread.length;

markBtn.addEventListener("click", () => {
    for (let i = 0; i < unread.length; i++) {
        unread[i].classList = "notification";
        unread[i].children[1].children[0].removeChild(document.querySelector(".badge"));
    };
    unread = [];
    notVal.innerHTML = unread.length;
});

for (let i = 0; i < unread.length; i++) {
    unread[i].classList += " unread";
    badge = document.createElement("span");
    badge.classList = "badge";
    unread[i].children[1].children[0].appendChild(badge);
};

unread.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index < 2) {
            val = 1;
        } else {
            val = index - 1;
        }

        button.classList.remove("unread");
        button.children[1].children[0].removeChild(button.querySelector(".badge"));
        unread.splice(index, val);
        notVal.innerHTML -= 1;
    });
});