/**
 * Generates an action object
 * @param {string} type
 * @param {any} [payload]
 */
export const createAction = (type, payload = undefined) => ({
  type,
  ...payload && { payload },
});

/**
 * Validates that the target is an object
 * @param {*} target
 */
export const isObject = (target) => target && typeof target === 'object';

/**
 * Removes the character at the specific index
 * @param {string} str
 * @param {int} index
 */
export const removeCharAt = (str, index) => (index === 0
  ? str.slice(1, str.lenght)
  : `${str.slice(0, index)}${str.slice(index + 1, str.lenght)}`);
