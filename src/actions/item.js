import { 
  FETCH_ITEM_LIST, SAVE_ITEM_SUCCESS,EDIT_ITEM,
   SHOW_ITEM_FORM, HIDE_ITEM_FORM 
} from '../constants/item';
import ItemService from '../services/ItemService';

export const fetchItemListSuccess = (items) => {
    return {
        type: FETCH_ITEM_LIST,
        items
    }
}

export const fetchItemList = () => {
    return dispatch => {
        return ItemService.getItems()
                          .then(res => {
                            // console.log(res.err);
                            dispatch(fetchItemListSuccess(res.data));
                          })
                          .catch(err => {
                            console.log("ahihi");
                            console.log(err);
                          })
    }
}

export const saveItemSuccess = (item) => {
  return {
    type: SAVE_ITEM_SUCCESS
  }
}

export const saveItem = (item) => {
  return dispatch => {
    return ItemService.save(item)
                      .then(res => {
                        console.log(res);
                        dispatch(saveItemSuccess(item));
                        // return fetchItemList();
                      })
                      .then(() => {
                        console.log('then 2');
                        dispatch(fetchItemList());
                      })
                      .catch(err => {
                        console.log(err);
                      })
  }
}

export const deleteItem = (id) => {
  return dispatch => {
    return ItemService.deleteItemById(id)
                      .then(res => {
                        console.log(res);
                      })
                      .then(() => {
                        console.log('then 2');
                        dispatch(fetchItemList());
                      })
                      .catch(err => {
                        console.log(err);
                      })
  }
}

export const search = (keyword) => {
  return dispatch => {
    return ItemService.getItems(keyword)
                      .then(res => {
                        console.log(res.data);
                        dispatch(fetchItemListSuccess(res.data))
                      })
                      .catch(err => {
                        console.log(err);
                      })
  }
}

export const editItem = (item) => {
  return dispatch => {
    return ItemService.save(item)
                    .then(res => {
                      console.log(res);
                      //dispatch(saveItemSuccess(item));
                    })
                    .then(() => {
                      console.log('then 2');
                      dispatch(fetchItemList());
                    })
                    .catch(err => {
                      console.log(err);
                    })
  }
}

export const loadEditItem = (item) => {
  return {
    type: EDIT_ITEM,
    item
  }
}

export const showItemForm = () => {
  return {
    type: SHOW_ITEM_FORM
  }
}

export const hideItemForm = () => {
  return {
    type: HIDE_ITEM_FORM
  }
}