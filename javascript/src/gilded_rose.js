class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  /*
  /!\ Do not change code above this line /!\
  */

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let specialItem = this.items[i].name == 'Aged Brie' || this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' || this.items[i].name == 'Sulfuras, Hand of Ragnaros'
      if(specialItem){
        if(this.items[i].name == 'Aged Brie'){
          if(this.items[i].quality < 50){  
            if(this.items[i].sellIn > 0){
              this.items[i].quality = this.items[i].quality + 1;}
            if(this.items[i].sellIn <= 0){
                this.items[i].quality = this.items[i].quality + 2;}
          }
          this.items[i].quality = this.items[i].quality > 50 ? 50 : this.items[i].quality
        }
        if(this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
          if(this.items[i].sellIn < 11){
            if(this.items[i].quality < 50){  
              this.items[i].quality = this.items[i].quality + 2;
            }
          }
          if(this.items[i].sellIn < 6){
            if(this.items[i].quality > 0){  
              this.items[i].quality = this.items[i].quality + 3;
            }
          }
          if(this.items[i].sellIn < 0){
            this.items[i].quality = 0;
          }
          else{
            this.items[i].quality = this.items[i].quality + 1;
          }
          this.items[i].quality = this.items[i].quality > 50 ? 50 : this.items[i].quality
        }
      }
      else{
        if(this.items[i].sellIn >= 0){
          if(this.items[i].quality > 0){  
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
        else{
          if(this.items[i].quality > 1){  
            this.items[i].quality = this.items[i].quality - 2;
          }
          if(this.items[i].quality > 0){  
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
        this.items[i].quality = this.items[i].quality < 0 ? 0 : this.items[i].quality
      }
      
      if(this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
    }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
