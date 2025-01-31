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
    specialItemsRules = [
      {},
    ]
    /*
    /!\ Do not change code above this line /!\
    */
   
    //Base behaviour
    handleDefaultItem(item){
      if(item.sellIn > 0){
        if (item.quality > 0) {
          item.quality = item.quality - 1;
      }
      else{
        if (item.quality > 0 && item.quality != 1) {
          item.quality = item.quality - 2;
        }
        else{
          item.quality = item.quality - 1;
        }
      }
    }
  
    //Special behaviours defined by rules
    handleSpecialItem(item){
      itemIndex = this.specialItemsRules.findIndex(speItem => speItem.name == item.name)
      if(itemIndex > -1){
        specialItem = specialItemsRules[itemIndex]
        switch(specialItem.incrementType){
          case 'increases': item.quality = (item.quality < 50 ? item.quality + specialItem.incrementValue : item.quality); break;
          case 'decreases': item.quality = (item.quality > 0 ? item.quality - specialItem.incrementValue : item.quality) ; break;
          case 'multiple': 
          default: break;
        }
      }
    }
    
    updateQuality() {
      
      for (var i = 0; i < this.items.length; i++) {
        switch(this.items[i].name){
          case 'Aged Brie': handleSpecialItem(this.items[i]) ; break;
          case 'Backstage passes to a TAFKAL80ETC concert': handleSpecialItem(this.items[i]) ; break;
          case 'Sulfuras, Hand of Ragnaros': handleSpecialItem(this.items[i]) ; break;
          default: this.handleDefaultItem(this.items[i]);
  
        }
      }
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality = this.items[i].quality - 1;
            }
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
          }
        }
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].quality = this.items[i].quality - 1;
                }
              }
            } else {
              this.items[i].quality = this.items[i].quality - this.items[i].quality;
            }
          } else {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }
  
      return this.items;
    }
  }
  module.exports = {
    Item,
    Shop
  }
  