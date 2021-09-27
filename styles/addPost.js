import styled from  'styled-components'


export const Input = styled.input `
    display: block;
    width: 100%;
    padding:0 10px;
    border-radius:15px;
    border:1px solid #000000;
    height:40px;
    &:focus-visible{
        outline:none;
    }   
`
export const Textarea = styled.textarea`
    resize: none;
    display: block;
    padding:10px;
    border-radius:15px;
    border:1px solid #000000;
    margin-bottom: 20px;
    &:focus-visible{
        outline:none;
}   
`
export const Label = styled.label`
    display: block;
    margin: 20px 0;
    margin-left:5px ;
    cursor: pointer;
`
export const Error =styled.div`
    color:red;
    margin-bottom: 20px;
`    