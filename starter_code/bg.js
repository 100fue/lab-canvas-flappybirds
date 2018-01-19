function CreateBg(){
    this.x = 0;
    this.y = 0;
    this.bgWidth = 940;
    this.bgHeight = 620;
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "./images/bg.png";
}

CreateBg.prototype.draw = function(ctx){
    
    ctx.drawImage(this.img, this.x, this.y, this.bgWidth, this.bgHeight);
}