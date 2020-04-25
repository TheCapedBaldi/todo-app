import {
  ACTION_START_RECORDING,
  ACTION_STOP_RECORDING,
  ACTION_ADD_CREATE,
  ACTION_ADD_DELETE,
} from "./constants";

/**
 *
 * @param {Object} state - the entire app state
 * @param {Object} args - an object that describes the actions
 */
const userActions = (state = {}, { type, payload }) => {
  switch (type) {
    case ACTION_START_RECORDING:
      return {
        ...state,
        isRecording: true,
      };
    case ACTION_STOP_RECORDING:
      return {
        ...state,
        isRecording: false,
      };
    case ACTION_ADD_CREATE:
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
    case ACTION_ADD_DELETE:
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
