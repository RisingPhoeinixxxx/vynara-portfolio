const canvas =
document.getElementById("background");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let particles = [];

class Particle {

    constructor() {

        this.x =
        Math.random() *
        canvas.width;

        this.y =
        Math.random() *
        canvas.height;

        this.size =
        Math.random() * 2 + 1;

        this.speedX =
        (Math.random() - 0.5) * 0.3;

        this.speedY =
        (Math.random() - 0.5) * 0.3;
    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {
            this.speedX *= -1;
        }

        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {
            this.speedY *= -1;
        }
    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
        "#60A5FA";

        ctx.fill();
    }
}

for(let i = 0; i < 150; i++){

    particles.push(
        new Particle()
    );
}

function connect(){

    for(let a = 0; a < particles.length; a++){

        for(let b = a; b < particles.length; b++){

            const dx =
            particles[a].x -
            particles[b].x;

            const dy =
            particles[a].y -
            particles[b].y;

            const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );

            if(distance < 120){

                ctx.beginPath();

                ctx.strokeStyle =
                "rgba(96,165,250,0.12)";

                ctx.lineWidth = 1;

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();
            }
        }
    }
}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p => {

        p.update();

        p.draw();
    });

    connect();

    requestAnimationFrame(
        animate
    );
}

animate();

window.addEventListener(
    "resize",
    () => {

        canvas.width =
        window.innerWidth;

        canvas.height =
        window.innerHeight;
    }
);