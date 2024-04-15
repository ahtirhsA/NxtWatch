import styled from 'styled-components'

export const Thumbnail = styled.img`
width:75%;
margin-bottom:3px;
`

export const CmnIcon = styled.img`
width:9%;
margin-right:6px;
margin-top:4px;
`

export const Title = styled.h1`
font-family:'Roboto';
font-size:${props => (props.p ? '9px' : '10px')};
color:${props => (props.p ? '#424242' : '#000000')};
width:${props => (props.p ? '' : '70%')};
font-weight:500;
margin-bottom:0px;
margin-top:${props => (props.p ? '11px' : '')};
`

export const DateCon = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
margin-top:0;
`
export const Span = styled.h1`
font-family:'Roboto';
font-size:20px;
color:#000000;
font-weight:600;
margin-left:4px;
margin-top:0;
margin-right:4px;
`
export const ListSty = styled.li`
width:30%;
margin-bottom:20px;
`
