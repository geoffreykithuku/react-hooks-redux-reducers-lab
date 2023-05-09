let state = {
  friends: [],
};

export function manageFriends(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "friends/add":
      return { ...state, friends: [...state.friends, payload] };
    case "friends/remove":
      let newArr = [...state.friends];
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].id === payload) {
          newArr.splice(i, 1);
          break;
        }
      }
      return { ...state, friends: newArr };
    default:
      return state;
  }
}
