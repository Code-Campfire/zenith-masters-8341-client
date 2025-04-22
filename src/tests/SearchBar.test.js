const SearchBar = require('../components/SearchBar');

test('Checks if it searches for user', () => {
  expect(SearchBar()).toBe('camden shaw');
});
