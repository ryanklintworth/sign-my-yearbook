export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return posts;
    case 'CREATE':
      return state;
    default:
      return posts;
  }
}