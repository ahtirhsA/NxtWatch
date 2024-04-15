import styled from 'styled-components'

export const UnorderList = styled.ul`
 padding-left:${props => (props.small ? '30px' : '0px')};
 list-style-type:none;
 width:100%;
 display:flex;
 flex-direction:${props => (props.small ? 'row' : 'column')};
 align-items:flex-start;

.li{
display:flex;
flex-direction:row;
align-items:flex-start;
margin-bottom:0px;
background-color:transparent;
width:100%;
padding-left:30px;
}

.li1{
display:flex;
flex-direction:row;
align-items:flex-start;
margin-bottom:0px;
background-color:#d7dfe9;
width:100%;
padding-left:30px;
}


.a{
font-size:30px;
font-weight:600;
color:#606060; 
align-self:center
}

.b{
font-size:30px;
font-weight:600;
color:#ff0b37; 
align-self:center;
}

.p{
font-family:"Roboto";
font-size:18px;
color:#181818;
font-weight:normal;
margin-left:25px;
}

.p1{
font-family:"Roboto";
font-size:18px;
color:#000000;
font-weight:600;
margin-left:25px;
}
`
export const Heading = styled.h1`
font-family:'Roboto';
font-size:14px;
color: #000000;
font-weight:600;
margin-bottom:28px;
padding-left:30px;
`

export const SIcon = styled.img`
width:40%;

`

export const CmnPara = styled.p`
font-family:'Roboto';
font-size:13px;
font-weight:600;
color: #00306e;
padding-left:30px;
`

export const SideBar = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
height:864vh;
width:20%;
`
