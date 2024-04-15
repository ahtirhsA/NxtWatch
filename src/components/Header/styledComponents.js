import styled from 'styled-components'

export const NxtLogo = styled.img`
 width:${props => (props.profile ? '15%' : '13%')};
 margin-left:${props => (props.profile ? '35px' : '')};
`
export const IconCon = styled.div`
font-size:38px;
font-weight:600;
color:#000000; 
align-self:center;
`
export const Butt = styled.button`
background-color:transparent;
font-family:'Roboto';
font-size:21px;
font-weight:500;
color:#3b82f6; 
border:2px solid #3b82f6;
border-radius:3px;
width:40%;
padding:6px;
margin-left:35px;
align-self:center;
`

export const SubCon = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
justify-content:${props => (props.big ? 'space-between' : 'flex-start')};
padding:${props => (props.big ? '30px' : '')};
`
