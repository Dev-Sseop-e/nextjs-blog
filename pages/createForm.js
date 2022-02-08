import {useState} from 'react';

import { useSelector, useDispatch } from "react-redux"
import {addQuestion, updateQuestion} from '../src/reducers/googleForm';

const CreateForm = () => {
    const [someState, setSomeState] = useState("abcd");
    const [arr, setArr] = useState([]);
    let arr2 = []

    const dispatch = useDispatch();
    const googleForm = useSelector(state => state.googleForm);

    const createQuestion = () => {
        const copied = [...arr]
        copied.push(5)
        setArr(copied)

        dispatch(addQuestion());
        //state.googleForm.questions //array
    }

    const onTextChange = (value, idx) => {
        console.log('on text change')
        dispatch(updateQuestion(value,idx));
    }
/*
[1,2,3].map(x => x*2) -> [2,4,6]
*/
    return <div>

        {arr.length}
        {googleForm.questions.map((question,idx) => 
                <div>question!! {idx}
                    <textarea value={question.title}
                    onChange={e => onTextChange(e.target.value, idx)}
                    
                    />
                    
                    </div>
            )}        

        <div onClick={createQuestion}>
            +
        </div>
    </div>
}

export default CreateForm