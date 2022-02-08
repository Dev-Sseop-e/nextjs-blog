export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const UPDATE_QUESTION = "UPDATE_QUESTION"


export const addQuestion = () => ({
    type: ADD_QUESTION,
})

export const updateQuestion = (text, idx) => ({
    type: UPDATE_QUESTION,
    payload: {
        text: text,
        idx: idx
    }
})

const initialState = {
  questions: [{title: "welcome to KAIST RINGLE mentoring"}], 
}

const googleForm = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:{
      return {
        ...state,
        questions: [...state.questions, {title: "hahaha"}]
      }
    }

    case UPDATE_QUESTION: {
        console.log('---------')
        console.log(action.payload.idx);

        //action.payload.idx, action.payload.text
        const idx = action.payload.idx
        const copiedQuestions = [...state.questions]
        copiedQuestions[idx].title = action.payload.text
        // 'state' setState 
        // state.questions
        //setState 
        //dㅣ렇게 해야 스테이트가 업데이트 됩니다! 
        return {
            ...state, 
            questions: copiedQuestions
        }
    }

    default:
      return state;
  }
};

export default googleForm;