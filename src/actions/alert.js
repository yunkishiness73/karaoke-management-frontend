import { 
    ALERT_OFF,
    ALERT_ON
  } from '../constants/constants';

  export const showAlert = (alertType, message) => {
     return {
        type: ALERT_ON,
        alertType,
        message
     }
  }

  export const hideAlert = () => {
      return {
        type: ALERT_OFF
      }
  }




