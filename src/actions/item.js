import { 
  FETCH_ITEM_LIST, SAVE_ITEM_SUCCESS,EDIT_ITEM,
   SHOW_ITEM_FORM, HIDE_ITEM_FORM 
} from '../constants/item';
import { AlertType, StatusCode } from '../constants/constants';
import ItemService from '../services/ItemService';
import * as alert from './alert';

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
                            if (res.status === StatusCode.SUCCESS) {
                              dispatch(fetchItemListSuccess(res.data));
                            }
                          })
                          .catch(err => {
                            dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
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
                        if (res.status === StatusCode.SUCCESS) {
                          dispatch(saveItemSuccess(item));
                          dispatch(alert.showAlert(AlertType.SUCCESS, res.data.message));
                        }
                      })
                      .then(() => {
                        dispatch(fetchItemList());
                      })
                      .catch(err => {
                        dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
                      })
  }
}

export const deleteItem = (id) => {
  return dispatch => {
    return ItemService.deleteItemById(id)
                      .then(res => {
                        if (res.status === StatusCode.SUCCESS) {
                          dispatch(alert.showAlert(AlertType.SUCCESS, res.data.message))
                        }
                      })
                      .then(() => {
                        dispatch(fetchItemList());
                      })
                      .catch(err => {
                        dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
                      })
  }
}

export const search = (keyword) => {
  return dispatch => {
    return ItemService.getItems(keyword)
                      .then(res => {
                        dispatch(fetchItemListSuccess(res.data))
                      })
                      .catch(err => {
                        dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
                      })
  }
}

export const editItem = (item) => {
  return dispatch => {
    return ItemService.save(item)
                    .then(res => {
                      dispatch(fetchItemList());
                    })
                    .catch(err => {
                      dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
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