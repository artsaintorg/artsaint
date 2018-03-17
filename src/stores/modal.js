export const SHOW = 'modal/SHOW'
export const HIDE = 'modal/HIDE'

const initialState = {
  show: false,
  content: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW:
      return {
        ...state,
        show: true,
        content: payload.content
      }
    case HIDE:
      return {
        ...initialState
      }

    default:
      return state
  }
}

export const showSignUpModal = () => dispatch => {
  dispatch({
    type: SHOW,
    payload: { content: 'sign-up' }
  })
}
export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE
  })
}
