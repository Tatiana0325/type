import Buyalbe from '../domain/buyable';

export default class Cart {
    private _items: Buyalbe[] = [];

    add(item: Buyalbe): void {
        this._items.push(item);
    }

    get items(): Buyalbe[] {
        return[...this._items];
    }

    sum(): any {
        let arr = this.items; 
        let sum = arr.reduce((result: number, arr) => {
            return result + arr.price;
        }, 0);
        
        return sum;
    }

    sumSale(discount: number): any {
        let sum = this.sum();
        if ((discount > 0) && (discount < 1)) {
            return sum * (1 - discount);
        } else {
            return sum * (1 - discount / 100);
        }
    }

    delete(id: number): any {
        let arr = this.items;
        this._items = [];
        arr.map((item) => {
            if(item.id != id) {
                this.add(item);
            }
        })

        return this.items;
    }
}