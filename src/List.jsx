import React from 'react';

const ListItem = ({title, description, completed}) => (
    <li>
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
        <>
            <h2>List</h2>
            <ul>
                {items}
            </ul>
        </>
    )
}

export default List;