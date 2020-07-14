import React from 'react';
import './List.css';

const ListItem = ({title, description, completed}) => (
    <li className="ellipsis">
        <input type="checkbox" checked={completed}></input>
        <span>{title}</span> <span className="descriptionBtn">▼</span>
        <div>
            <textarea className="description" readOnly>
                {description}
            </textarea>
        </div>
    </li>
)

const List = (props) =>{
    const {todoList} = props;

    const items = todoList.map(
        item => (
            <ListItem {...item}/>
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