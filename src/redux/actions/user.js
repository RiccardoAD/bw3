export const USER_LOGIN = 'USER_LOGIN'

export const userLoginAction = (inputFieldValue) => {
    return {
      type: USER_LOGIN,
      payload: inputFieldValue,
    }
  }