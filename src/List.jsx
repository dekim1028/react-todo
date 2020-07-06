import React from 'react';
import './List.css';

const ListItem = ({title, description, completed}) => (
    <li class="ellipsis">
        <input type="checkbox" checked={completed}></input>
        <span>{title}</span>
        <p>{description}</p>
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