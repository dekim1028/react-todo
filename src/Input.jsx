import React, {useState} from 'react';
import './Input.css';

const Input = (props) =>{
    const {addTodo} = props;
    const {saveTodo} = props;
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const onClickButton = () =>{
        if(!title || !description){
            alert("제목과 내용을 모두 입력해주세요");
        }else{
            const id = addTodo({title,description});
            saveTodo(title, description, id);
            setTitle("");
            setDescription("");
        }
    }

    return (
        <div className="input-wrap">
            <div>
                <input className="subject" placeholder="제목" type="text" value={title} onChange={onChangeTitle}/>
            </div>
            <div>
                <textarea className="content" value={description} onChange={onChangeDescription}></textarea>
            </div>

            <button className="addBtn" onClick={onClickButton}>추가</button>
        </div>
    )
}

export default Input;