const canvas = document.createElement('canvas');
const c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const box = {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    moveX: 2 * (Math.random() * 2 - 1),
    moveY: 2 * (Math.random() * 2 - 1),
    color: "white", text: "Sabir Ali",

    draw(){
        // c.fillStyle = box.color;
        // c.fillRect(box.x, box.y, box.w, box.h);
        c.fillStyle="Black";
        c.font = "1cm sans-serif";
        c.fillText(this.text, this.x, this.y + this.h / 2);
    },
    
    animate(){
        this.x += this.moveX;
        this.y += this.moveY;

        if(this.x + this.w > canvas.width || this.x < 0){
            this.moveX *= -1;
        }

        if(this.y + this.h > canvas.height || this.y < 0){
            this.moveY *= -1;
        }
    }
}

function init(){
    document.body.appendChild(canvas);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    animate();
}

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);


    box.draw();
    box.animate();


    requestAnimationFrame(animate);
}

init();
function sum() {
    var s= 10;
    var b=40;
var c= s+b;
console.log(c);
document.getElementById("demo").innerHTML =c;
    
}

