import styled from "styled-components";
import ReactSelect from "react-select";


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
padding-bottom: 100px;
`;

export const Form = styled.form`
border-radius: 20px;
background-color: ${(prosp) => prosp.theme.black};
padding: 32px;
width: 100%;
max-width: 380px;
display: flex;
flex-direction: column;
gap: 12px;

`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 14px;
  
`;

export const Input = styled.input`
  width: 100%;
height: 48px;
padding: 0 12px;
  border-radius: 4px;
  border: none;


`;

export const Select = styled(ReactSelect)`
`;

export const LabelUpload = styled.label`
  display: flex;
border: 1px dashed ${(props) => props.theme.white};
 padding: 10px;
  cursor: pointer;
border-radius: 5px;
margin: 20px 0;
  color: ${(props) => props.theme.white};

  > svg{
    width: 20px;
    height: 20´x;
    fill: ${(props) => props.theme.white};
    margin-right: 4px;
  }
  input{
    display: none;
  }

`;

export const SubmitButton = styled.button`
 width: 100%; 
 height: 42px;
 border: 0;
 border-radius: 5px;
background-color:#9758a6;
font-family: "Road Rage", sans-serif ;
color: white;
font-size: 30px;
margin-top: 20px;


&:hover{
    background-color: #6f357c;
    border: 1px dashed white;
}

`
export const ErrorMessage = styled.span`
color: ${(props) => props.theme.darkRed};
font-size: 14px;
font-weight:600;

`


export const ContainerCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;