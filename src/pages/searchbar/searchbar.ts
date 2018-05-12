import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})
export class SearchbarPage {

  searchQuery : string= '';
  items: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItem();
  }
  initializeItem() {
    this.items= [
      'มหาสารคาม',
      'บุรีรัมย์',
      'ร้อยเอ็ด',
    ]
  }
  getItems(ev:any){
    this.initializeItem();
    let val = ev.target.value;
    if (val && val.trim() !=''){
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchbarPage');
  }

}
