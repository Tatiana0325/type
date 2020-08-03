import Cart from '../service/cart';
import Book from '../domain/book';
import MusicAlbom from '../domain/music-albom';
import Movie from '../domain/movie';

const cart = new Cart();

test('New card should be empty', () => {
    expect(cart.items.length).toBe(0);
});

const book = new Book(1, 'Евгений Онегин', 'Пушкин А.С.', 100, 500);
const music = new MusicAlbom(2, 'Народные русские песни', 'Шестакович', 500, 20);
const movie = new Movie(3, 'Мстители', 'США', 600, 2012, 'Не выражаться', 'фантастика', '137 мин');

test('Adding item in cart', () => {
    cart.add(book);
    cart.add(music);
    cart.add(movie);

    expect(cart.items.length).toBe(3);
});

test('Sum of the prices of the selected items', () => {
    const sum = cart.sum();

    expect(sum).toBe(1200);
});

test('Sum of the prices with the discount', () => {
    const sumsale = cart.sumSale(15);

    expect(sumsale).toBe(1020);
});

test('Sum of the prices with the discount', () => {
    const sumsale = cart.sumSale(0.15);

    expect(sumsale).toBe(1020);
});

test('Delete item', () => {
    cart.delete(2);
    
    expect(cart.items.length).toBe(2);
});