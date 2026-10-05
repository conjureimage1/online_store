import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
        ]
        this._brands = [
            {id: 1, name: 'Sumsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://s13emagst.akamaized.net/products/33382/33381522/images/res_fc656fc6c95fe4d47eaac0c23daf926f.jpg'},
            {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://s13emagst.akamaized.net/products/33382/33381522/images/res_fc656fc6c95fe4d47eaac0c23daf926f.jpg'},
            {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://s13emagst.akamaized.net/products/33382/33381522/images/res_fc656fc6c95fe4d47eaac0c23daf926f.jpg'},
            {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://s13emagst.akamaized.net/products/33382/33381522/images/res_fc656fc6c95fe4d47eaac0c23daf926f.jpg'},
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}