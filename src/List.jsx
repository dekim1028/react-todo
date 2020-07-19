import React from 'react';
import './List.css';
import { useState } from 'react';

const ListItem = ({title, id, description, completed, toggleTodoStatus}) => {
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
                <textarea className="description" readOnly value={description}>
                </textarea>
            </div>
        </li>
    )
}

const List = (props) =>{
    const { todoList , toggleTodoStatus} = props;

    const items = todoList.map(
        item => (
            <ListItem
                key={`list-item-${item.id}`}
                toggleTodoStatus={toggleTodoStatus}
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