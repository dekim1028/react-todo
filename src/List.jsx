import React from 'react';
import './List.css';
import { useState } from 'react';
import editIcon from './image/edit_icon.png';
import delIcon from './image/del_icon.png';

const ListItem = ({title, id, description, completed, toggleTodoStatus, removeTodo, updateTodo}) => {
    const [arrow, setArrow] = useState('▼');
    const [isShowDetail, setShowDetail] = useState(false);

    const onClickArrow = () =>{
        if (arrow === '▲') {
            setArrow('▼');
            setShowDetail(false);
            return;
        }

        setShowDetail(true);
        setArrow('▲'); 
    }

    const onChangeCompleted = () =>{
        toggleTodoStatus(id);
    }

    const onClickDelBtn = () =>{
        const delCheck = window.confirm("정말 삭제하시겠습니까?");
        if(delCheck){
            removeTodo(id);
        }
    }

    const onClickUpdateBtn = () =>{
        //TODO: 수정 버튼 클릭
        updateTodo();
    }

    return (
        <li className="ellipsis">
            <div style={{marginBottom: "10px"}}>
                <input type="checkbox" checked={completed} onChange={onChangeCompleted} id={`list-item-${id}`}/>
                <label htmlFor={`list-item-${id}`}>
                    {
                        completed
                        ? <del className="deleteTitle">{title}</del>
                        : <span>{title}</span>
                    }
                </label>
                <span className="descriptionBtn" onClick={onClickArrow}>{arrow}</span>
            </div>
            <div style={{
                display: isShowDetail ? 'block' : 'none'
                }}>
                <div className="Icon">
                    <img className="editIcon" src={editIcon} onClick={onClickUpdateBtn} alt="수정"></img>
                    <img className="delIcon" src={delIcon} onClick={onClickDelBtn} alt="삭제"></img>
                </div>
                <textarea className="description" readOnly value={description}></textarea>
            </div>
        </li>
    )
}

const List = (props) =>{
    const { todoList , toggleTodoStatus, removeTodo, updateTodo} = props;

    const items = todoList.map(
        item => (
            <ListItem
                key={`list-item-${item.id}`}
                toggleTodoStatus={toggleTodoStatus}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                {...item}/>
        )
    );

    return(
        <div className="listDiv">
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default List;