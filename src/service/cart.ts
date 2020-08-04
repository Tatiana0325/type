import Buyalbe from '../domain/buyable';

export default class Cart {
    private _items: Buyalbe[] = [];

    add(item: Buyalbe): void {
        this._items.push(item);
    }

    get items(): Buyalbe[] {
        return[...this._items];
    }

    sum(): number {
        let arr = this.items; 
        let sum = arr.reduce((result: number, arr) => {
            return result + arr.price;
        }, 0);
        
        return sum;
    }

    sumSale(discount: number): number {
        let sum = this.sum();
        if ((discount > 0) && (discount < 1)) {
            return sum * (1 - discount);
        } else {
            return sum * (1 - discount / 100);
        }
    }

    delete(id: number): Buyalbe[] {
        this._items = this._items.filter(item => item.id !== id);
        return this.items;
    }
}