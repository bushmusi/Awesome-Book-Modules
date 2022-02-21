import { Library } from './main.js';
import * as main from './main.js';

const myLibrary = new Library();
main.addButton.addEventListener('click', (event) => {
  event.preventDefault();
  myLibrary.addBook(main.niceTitle.value, main.theAuthor.value);
});

document.addEventListener('DOMContentLoaded', () => {
  myLibrary.getLocalStorage();
});

export default myLibrary;
