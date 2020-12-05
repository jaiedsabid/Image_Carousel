let images = [
    "images/img_01.jpg",
    "images/img_02.jpg",
    "images/img_03.jpg"
  ];

let current_index = 0;

let next_btn = document.getElementById("next-button");
let prev_btn = document.getElementById("prev-button");
let img = document.querySelector("img");

const inc = () => {
    current_index++;
    if(current_index > images.length - 1)
    {
        current_index = 0;
    }
    return current_index;
}

const dec = () => {
    current_index--;
    if(current_index < 0)
    {
        current_index = images.length - 1;
    }
    return current_index;
} 

next_btn.onclick = () => {
    img.setAttribute("src", images[inc()]);
}

prev_btn.onclick = () => {
    img.setAttribute("src", images[dec()]);
}