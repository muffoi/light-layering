let c = document.getElementById("area"),
    ctx = c.getContext("2d", {
    alpha: false
})

addEventListener("resize", resize);

resize()

function resize() {
    c.width=window.innerWidth;
    c.height=window.innerHeight;
}

const CH=.7, rr=120;
let r = 161, mod = -CH, fr=0;

function render() {

    ctx.globalCompositeOperation="screen";
    ctx.clearRect(0,0,c.width,c.height);

    ctx.beginPath()
    ctx.ellipse(...calcPos(2.0943951), rr, rr, 0, 0, 360);
    ctx.fillStyle = '#f00';
    ctx.fill();

    ctx.beginPath()
    ctx.ellipse(...calcPos(4.18879021), rr, rr, 0, 0, 360);
    ctx.fillStyle = '#0f0';
    ctx.fill();

    ctx.beginPath()
    ctx.ellipse(...calcPos(6.28318531), rr, rr, 0, 0, 360);
    ctx.fillStyle = '#00f';
    ctx.fill();

    if(r>160)mod=-CH;
    if(r<20)mod=CH;
    if((r>160||r<20)&&fr<40) fr+=1; else { fr=0;r+= mod;}

    requestAnimationFrame(render);
}
requestAnimationFrame(render);

function calcPos(rad) {
    let midX = c.width/2, midY = c.height/2;
    return [
        Math.cos(rad)*r+midX,
        Math.sin(rad)*r+midY
    ]
}