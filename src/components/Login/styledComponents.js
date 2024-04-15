import styled from 'styled-components'

export const NxtwaveLogo = styled.img`
width:50%;
margin-bottom:30px;
align-self:center;
`
export const Inp = styled.input`
width:100%;
background-color:transparent;
padding:15px;
border:1.3px solid #909090;
border-radius:4px;
font-family:"Roboto";
font-size:22px;
color:#7e858e;
font-weight:normal;
cursor:pointer;
`
export const Label = styled.label`
font-family:"Roboto";
font-size:${props => (props.show ? '23px' : '20px')};
color:${props => (props.show ? '#000000' : '#7e858e')};
font-weight:600;
margin-bottom:${props => (props.show ? '' : '7px')};
`
export const InpLabelCon = styled.div`
display:flex;
flex-direction:${props => (props.checkdiv ? 'row' : 'column')};
align-items:flex-start;
margin-bottom:30px;
`
export const Checkbox = styled.input`
background-color:transparent;
border:1.3px solid #0f0f0f;
border-radius:2px;
cursor:pointer;
transform: scale(2);
margin-right:18px;
align-self:center;
`

export const LoginButt = styled.button`
background-color:#3b82f6;
border-width:0px;
border-radius:4px;
cursor:pointer;
padding:13px;
font-family:'Roboto'
font-size:20px;
color:#ffffff;
font-weight:600;
width:100%;
`
export const FormEle = styled.form`
background-color:#ffffff;
border-width:0px;
border-radius:3px;
padding:50px;
box-shadow: 0px 0px 20px 0px #64748b;
display:flex;
flex-direction:column;
`

export const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
height:100vh;
`
export const ErrorPara = styled.p`
font-family:"Roboto";
font-size:18px;
color: #ff0000;
font-weight:600;
`
