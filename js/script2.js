//클릭시 물방울 효과

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 0; //색상

window.addEventListener('resize',function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
}
canvas.addEventListener('click' , function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  for(let i =0; i <10; i++){
    particlesArray.push(new Particle());
  }
  
});

canvas.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  
})


class Particle{
  constructor(){
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 30 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = 'hsl(' + hue +', 100%, 50%)'; //hue동그라미라인
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.size > 0.3) this.size -= 0.1;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);//숫자가 클수록 파티클이 퍼지는 범위가 제각각임
    ctx.fill();
  }
}

function handleParticles(){
  for (let i = 0; i < particlesArray.length; i++){
    particlesArray[i].update();
    particlesArray[i].draw();
    if (particlesArray[i].size <= 0.3){//클릭시 나타나는 파티클 최대크기
      particlesArray.splice(i, 1);
      console.log(particlesArray.length);
      i--;
    }
  }
}

function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue+=0.5; //hue동그라미 라인에서 0.5씩이동(클릭할때마다 색상변경)
  requestAnimationFrame(animate);
}
animate();
