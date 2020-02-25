import React, { useState } from 'react';
import styled from 'styled-components'
import { Checkbox } from '@material-ui/core'

const TodoLayout = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 700px;
    border-style: solid;
`

const TodoTitle = styled.div`
    font-size: 50px;
    display:table-cell;
    vertical-align:middle;
    width: 500px;
    height: 100px;
    background: aquamarine;
    text-align: center;
    color: rgb(200,130,230);
`

const TodoInput = styled.input`
 /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    outline: none;
    border: none;
    border-bottom: 1px solid #c5f6fa;
    margin-top: 20px;
    width: 440px;
    padding-left: 10px;
`

const TodoAdd = styled.button`
    background: purple;
    color: white;
    border-bottom: 0;
    border-top: 10px;
    border-left: 0;
    border-right: 0;
    font-size: 15px;
    height: 40px;
`

const Hr = styled.hr`
    background-color: aqua;
    border-left: 20px;
    border-right: 20px;
    border-top: 0;
    border-bottom: 0;
    height: 6px;
`

const ShowTodoList = styled.div`
    padding-left: 6px;
    margin-top: 10px;
    font-size: 18px;
    border-style: solid;
    background-color: aquamarine;
    border: none;
    height: 45px;
`

const TodoListRemove = styled.button`
    border: none;
    position: absolute;
    margin-top: -1px;
    left: 66.12%;
    width:30px;
    height:45px;
    flex: 1;
    background-color: red;
    color: white;
`


const TodoTemplate = () => {
    const [todoId, setTodoId] = useState(0);
    const [todoList, setTodoList] = useState([]);
    const [input, setInput] = useState('');

    const onChange = e => {
        setInput(e.target.value);
    }

    const onClick = () => {
        setTodoList([
            ...todoList,
            {key: todoId, todo: input, checked: false }
        ])
        setTodoId(todoId + 1);
        setInput('')
    }

    const onRemove = key => {
        const nextTodoList = todoList.filter(val => val.key !== key);
        setTodoList(nextTodoList);
    }

    const onChecked = (key) => {
        const nextTodoList = todoList.map(val => {
            if (val.key === key) val.checked = !val.checked;
            return val;
        })
        
        setTodoList(nextTodoList)
    }

    const showTodoList = todoList.map((val, idx) => {
        if (val.checked) {
            return (
                <>
                
                <ShowTodoList style={{backgroundColor:"grey"}} key={val.key}>
                <Checkbox onChange={() => onChecked(val.key)}/><del>{val.todo}</del>
                <TodoListRemove onClick={() => onRemove(val.key)}>X</TodoListRemove>
                </ShowTodoList>
                
                </>
            )

        }
        return (
            <>
            <ShowTodoList key={val.key}>
            <Checkbox onChange={() => onChecked(val.key)}/>{val.todo}
            <TodoListRemove onClick={() => onRemove(val.key)}>X</TodoListRemove>
            </ShowTodoList>
            </>
        )
    })

    return (
        <>
            <TodoLayout>
                <TodoTitle>할 일 목록</TodoTitle>
                <TodoInput type="text" value={input} placeholder="할 일을 입력하세요" onChange={onChange}></TodoInput>
                <TodoAdd onClick={onClick}>추가</TodoAdd>
                <Hr />
                {showTodoList}
            </TodoLayout>
        </>
    )
}

export default TodoTemplate;
