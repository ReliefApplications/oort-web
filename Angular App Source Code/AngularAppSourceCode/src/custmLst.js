class CustomList extends HTMLElement {
  constructor() {
    super();
   
    this._items = [];
  }
  set items(value) {
    this._items = value;
  }
  
  get items() {
    return this._items;
  }
}