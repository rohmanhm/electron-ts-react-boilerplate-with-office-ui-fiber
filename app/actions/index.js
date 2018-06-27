// flow

const TYPES: { [key: actionStringType]: actionStringType } = {
  DECREMENT_COUNTER: 'DECREMENT_COUNTER',
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  FETCHING_OFF: 'FETCHING_OFF',
  FETCHING_ON: 'FETCHING_ON',
  FETCHING_ERROR: 'FETCHING_ERROR',
  MESSAGE_CLEAR: 'MESSAGE_CLEAR',
  MESSAGE_SET: 'MESSAGE_SET',
  TRASH: 'TRASH',
  USER_ADD: 'USER_ADD',
  USER_DELETE: 'USER_DELETE',
  USER_FETCH: 'USER_FETCH',
  USER_UPDATE: 'USER_UPDATE',
  USERS_FETCH: 'USERS_FETCH'
};

export default {
  TYPES
};