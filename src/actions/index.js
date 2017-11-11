

export const SUBMIT = 'SUBMIT';

export function saveFood(value) {
  return {
    type: SUBMIT,
    value
  }
}