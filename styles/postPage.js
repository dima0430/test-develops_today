import styled from 'styled-components'


export const Form = styled.form`
    display: flex;
    justify-content:space-between;
    margin-bottom: 10px;
    `
export const WrapperComments = styled.div`
    border-top: 1px solid #2c2c2c;
    margin-top: 50px;
    padding-top: 20px;
`
export const Button =styled.button`
    height:40px;
    padding: 5px;
    width: 100px;
    border:none;
    background-color:#000000;
    color:#ffffff;
    border-radius:15px;
    cursor: pointer;
`
export const Input =styled.input`
    width:80%;
    padding: 0 10px;
    border-radius:15px;
    border:1px solid #000000;
    &:focus-visible{
        outline:none;
    }
`
export const Comment = styled.li`
    &:not(:last-child){
        margin-bottom: 20px;
    }
    &:first-child{
        margin-top: 20px;
    }
`