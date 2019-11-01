import { FETCH_ITEM_LIST } from '../constants/item';
import ItemService from '../services/ItemService';

export const fetchItemListSuccess = (items) => {
    return {
        type: FETCH_ITEM_LIST,
        items
    }
}

export const fetchItemList = () => {
    return dispatch => {
        return ItemService.getAll()
                          .then(res => {
                            // console.log(res.data);
                            dispatch(fetchItemListSuccess(res.data));
                          })
                          .catch(err => {
                            console.log(err);
                          })
    }
}

export const saveItem = (item) => {
  return dispatch => {
    return ItemService.save(item)
                      .then(res => {
                        console.log(res.data);
                      })
                      .catch(err => {
                        console.log(err);
                      })
  }
}