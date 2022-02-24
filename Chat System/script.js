let enterMessage = document.getElementById("entermsg");
const sendButton = document.querySelector(".send");
const receiveButton = document.querySelector(".receive");
let messageArea = document.getElementById("message-list");
messageArea.innerHTML = "";

sendButton.addEventListener("click", function () {
  updateMesssageArea("send");
});

receiveButton.onclick = function () {
  updateMesssageArea("receive");
};

function updateMesssageArea(type) {
  if (enterMessage.value !== "") {
    const msg = document.createElement("li");
    msg.textContent = enterMessage.value;
    if (type === "send") msg.style.textAlign = "right";
    msg.style.listStyleType = "none";
    messageArea.appendChild(msg);
    enterMessage.value = "";
    enterMessage.focus();
  }
}
