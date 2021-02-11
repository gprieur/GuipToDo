if (localStorage.getItem("white/dark") === null) {
    localStorage.setItem("white/dark", "white")
}
window.location.href = './'+localStorage.getItem("white/dark")+'/index.html';