function CreateFaby(){
    this.x = 80;
    this.y = 60;
    this.vx = 0;
    this.vy = 0;
    this.gravity = 
    this.userPull = 0;
    this.fabyWidth = 20;
    this.fabyHeight = 20;
    this.img = new Image();
    this.img.src = "./images/flappy.png";
}

CreateFaby.prototype.draw = function(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.fabyWidth, this.fabyHeight);
}

// var img = new Image();
//     img.src = "./images/flappy.png";

//     img.onload = function(){
//         ctx.drawImage(img, this.x, this.y, this.fabyWidth, this.fabyHeight);
//     }