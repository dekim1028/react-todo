import React, {useState} from 'react';

const Input = (props) =>{
    const {addTodo} = props;
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const onClickButton = () =>{
        addTodo({title,description});
    }

    return (
        <div className="input-wrap">
            <label>
                제목
                <input type="text" value={title} onChange={onChangeTitle}/>
            </label>
            <label>
                내용
                <input type="text" value={description} onChange={onChangeDescription}/>
            </label>

            <button onClick={onClickButton}>추가</button>
        </div>
    )
}

export default Input;