let count = 0;
let up = document.getElementById('GFG_UP');
up.innerHTML = "Click on the button to add image element";
let down = document.getElementById('GFG_DOWN');
let id = null;
let img = document.getElementById('images');
let vis = true;
function start() {
    clearInterval(id);
    id = setInterval(frame, 175);
    function frame() {
        draw();
        next();
        if (count == 7) {
            count = 0
        }
    }
}
function draw() {
    img.src = 'sprites/tile00' + count + '.png';
    down.innerHTML = count;
}
function pause() {
    clearInterval(id);
}
function stop() {
    clearInterval(id);
    count = 0;
}
function next() {
    count = count + 1;
    if (count == 8) count = 0;
}
function prev() {
    count = count - 1;
    if (count == -1) count = 7;
}
let images = [];

async function getSpriteImages() {
    for (let i = 0; i < 8; i++) {
        let url = "sprites/tile00" + i + ".png";

        let options = {
            method: "GET",
        };

        let response = await fetch(url, options);

        if (response.status === 200) {
            alert('eror')
            let imageBlob = await response.blob();
            let imageObjectURL = URL.createObjectURL(imageBlob);
            let image = document.createElement("img");
            image.src = imageObjectURL;

            images.push(image);
        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }
}

async function load_pic() {

    const url = 'sprites/tile002.png'

    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)

    if (response.status === 200) {

        const imageBlob = await response.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob);

        const image = document.createElement('img')
        img.src = imageObjectURL

        const container = document.getElementById("images")
        container.append(image)
    }
    else {
        console.log("HTTP-Error: " + response.status)
    }
}