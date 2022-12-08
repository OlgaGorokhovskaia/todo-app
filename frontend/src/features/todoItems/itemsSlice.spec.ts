import listReducer, {
  ItemsState,
  updateItems,
} from './itemsSlice';
import itemsReducer from './itemsSlice';

describe('items reducer', () => {
  const initialState: ItemsState = {
    name: '',
    items: [],
  };
  it('should handle initial state', () => {
    expect(itemsReducer(undefined, { type: 'unknown' })).toEqual({
      name: '',
      items: [],
    });
  });

  it('should handle update items', () => {
    const mockItem = {completed: false, id:'123', value: 'Item_1'};
    const actual = listReducer(initialState, updateItems([mockItem]));
    expect(actual.items).toEqual([mockItem]);
  });
});
