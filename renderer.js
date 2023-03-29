const { ipcRenderer } = require("electron");

document.getElementById("btn1").addEventListener("click", () => {
    ipcRenderer.send("channel_1", "param1", "param2");
});
