var fruit = {
  apple:20,
  pear:20,
  peach:10,
  getTotal:function(){
    return this.apple+this.pear+this.peach;
  }
}
console.log(fruit.getTotal());