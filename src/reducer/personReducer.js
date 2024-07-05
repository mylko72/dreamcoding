export default function personReducer(state, action){
  switch(action.type){
    case 'updated': {
      const {prev, current } = action;
      return {
        ...state,
        mentors: state.mentors.map(mentor => {
          if(mentor.name === prev){
            return {...mentor, name: current}
          }
  
          return mentor
        })
      }
    }
    case 'added': {
      const { name, title, direction } = action;
      return {
        ...state,
        mentors: direction === 'forward' ? [{name, title}, ...state.mentors,] : [ ...state.mentors, {name, title} ]
      }
    }
    case 'deleted': {
      return {
        ...state,
        mentors: state.mentors.filter(mentor => mentor.name !== action.name)
      }
    }
    default: {
      throw Error(`알 수 없는 타입입니다 ${action.type}`)
    }
  }
}