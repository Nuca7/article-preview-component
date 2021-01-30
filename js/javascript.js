let shareBtn = document.querySelector(".shareBtn");
shareBtn.addEventListener("click", test);

let count = 0;
function test() {
    let btnContent = document.querySelector(".hidden")
    
    if(count % 2 === 0) {
        btnContent.classList.add("show");
        count++;
    } else {
        btnContent.classList.remove("show");
        count = 0;
    }
}