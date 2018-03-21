import api from './apiHelpers'

export const DEFAULT_TAG = 'art'
export const GET_FEED = 'feed/GET_FEED'
export const GET_FEED_SUCCESS = 'feed/GET_FEED_SUCCESS'
export const GET_FEED_ERROR = 'feed/GET_FEED_ERROR'
export const UPDATE_POST_ENTITIES = 'feed/UPDATE_POST_ENTITIES'

// const initialSubstate = {
//   loading: true,
//   list: [],
//   hasMore: true
// }

const initialState = {
  posts: {},
  trending: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FEED:
      return {
        ...state,
        [payload.sortBy]: {
          ...state[payload.sortBy],
          [payload.tag]: {
            ...state[payload.sortBy][payload.tag],
            loading: true
          }
        }
      }
    case GET_FEED_SUCCESS:
      return {
        ...state,
        [payload.sortBy]: {
          ...state[payload.sortBy],
          [payload.tag]: {
            ...state[payload.sortBy][payload.tag],
            loading: false,
            list: [...state[payload.sortBy][payload.tag], ...payload.ids]
          }
        }
      }
    case GET_FEED_ERROR:
      return {
        ...state,
        [payload.sortBy]: {
          ...state[payload.sortBy].sortBy,
          [payload.tag]: {
            ...state[payload.sortBy][payload.tag],
            loading: false
          }
        }
      }

    case UPDATE_POST_ENTITIES:
      return {
        ...state,
        posts: {
          ...state.posts,
          ...payload.postEntities
        }
      }

    default:
      return state
  }
}

export const getFeed = (
  sortBy = 'trending',
  tag = DEFAULT_TAG,
  lastPost
) => dispatch => {
  dispatch({
    type: GET_FEED,
    payload: {
      sortBy,
      tag
    }
  })
  api(`/feed/${sortBy}`, {}, (err, result) => {
    if (err) {
      dispatch({
        type: GET_FEED_ERROR,
        payload: {
          sortBy,
          tag
        }
      })
    } else {
      const ids = []
      const postEntities = {}
      // convert array to object
      result.map(item => {
        ids.push(item.id)
        postEntities[item.id] = item
      })

      dispatch({
        type: UPDATE_POST_ENTITIES,
        payload: {
          postEntities
        }
      })

      dispatch({
        type: GET_FEED_SUCCESS,
        payload: {
          sortBy,
          tag,
          ids
        }
      })
    }
  })
}
