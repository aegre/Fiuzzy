/**
 * Generates an action object
 * @param {string} type
 * @param {any} [payload]
 */
export const createAction = (type, payload = undefined) => ({
  type,
  ...payload && { payload },
});

export default {
  createAction,
};
