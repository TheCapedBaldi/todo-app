import {
  IS_RECORDING,
  NOT_RECORDING,
  ACTION_CREATE,
  REMOVE_TOP,
  ACTION_DELETE,
} from "./constants";

/**
 *
 * @param {Object} state - the entire app state
 * @param {Object} args - an object that describes the actions
 */
const userActions = (state = {}, { type, payload }) => {
  switch (type) {
    case IS_RECORDING:
      return {
        ...state,
        isRecording: true,
      };
    case NOT_RECORDING:
      return {
        ...state,
        isRecording: false,
      };
    case REMOVE_TOP:
      return {
        ...state,
        actions: state.actions.filter(({ id }) => id !== payload),
      };
    case ACTION_CREATE:
      return {
        ...state,
        actions: [
          ...(state.actions || []),
          {
            id: payload.id,
            action: payload.action,
          },
        ],
      };
    case ACTION_DELETE:
      return {
        ...state,
        actions: [
          ...(state.actions || []),
          {
            id: payload.id,
            action: payload.action,
          },
        ],
      };
    default:
      return state;
  }
};

export default userActions;
