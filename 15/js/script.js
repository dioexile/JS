'use strict'


const DomElement = function(selector, height, width, bg, fS) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fS = fS;
};
DomElement.prototype.elementCreate = function(){
  if (this.selector[0]=='.'){
    let div = document.createElement('div')
    div.classList = this.selector.slice(1, this.selector.length);
    div.textContent = "Привет,я новый блок 1";
    
    div.style.cssText = 
    "height: " + this.height + "px;" + 
		"width: " + this.width + "px;" +
    "background" + this.bg + ";" +
    "font-size: " + this.fS + "px;"
    document.body.append(div);

  } else if(this.selector[0]=='#'){
    let p = document.createElement("p");
    p.id = this.selector.slice(1, this.selector.length);
    p.textContent = "Привет,я новый блок 2";
    p.style.cssText = 
    "height: " + this.height + "px;" + 
		"width: " + this.width + "px;" +
    "background" + this.bg + ";" +
    "font-size: " + this.fS + "px;" +
    "margin-left: 100px";
    document.body.append(p);
  }
};


const div = new DomElement(".div", 5, 150, 14);
const p = new DomElement ("#p", 5, 250,18);
div.elementCreate();
p.elementCreate();