export default function personReducer({state, action}){
  switch(action){
    case 'update':
      const { prev, current } = action;
      return (state) => ({
        ...state,
        mentors: state.mentors.map(mentor => {
          if(mentor.name === prev){
            return {...mentor, name: current}
          }
  
          return mentor
        })
      });  
    case 'add':
      const { name, title, direction } = action;
      return (state) => ({
        ...state,
        mentors: direction === 'forward' ? [{name, title}, ...state.mentors,] : [ ...state.mentors, {name, title} ]
      })
    case 'delete':
      return (state) => ({
        ...state,
        mentors: state.mentors.filter(mentor => mentor.name !== action.name)
      })
    default:
      return;
  }
}