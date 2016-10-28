const
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT';

const initState = {
  counter: 1
};

export default (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state;
  }
};

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});