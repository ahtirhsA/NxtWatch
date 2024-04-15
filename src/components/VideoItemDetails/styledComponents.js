import styled from 'styled-components'

export const VideosContainer1 = styled.div`
 background-color:#ebebeb;
 padding:20px;
 width:60%;
 flex-grow:1;
 max-height:864vh;
`

export const Divider1 = styled.div`
 display:flex;
 flex-direction:row;
 align-items:flex-start;
`
export const Title1 = styled.h1`
font-family:'Roboto';
font-size:${props => (props.p ? '9px' : '10px')};
color:${props => (props.p ? '#424242' : '#000000')};
font-weight:500;
margin-top:${props => (props.p ? '11px' : '15px')};
`
export const DateCon1 = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
margin-top:0;
margin-left:${props => (props.b ? '11px' : '')};
margin-right:${props => (props.b ? '11px' : '')};
justify-content:${props => (props.bigg ? 'space-between' : '')};

.like{
font-size:13px;
 background-color:transparent;
 border-width:0px;
 color:#000000;
 margin-right:2px;
 padding-bottom:0;
 align-self:center;
 }

 .like1{
font-size:13px;
 background-color:transparent;
 border-width:0px;
 color:#3b82f6;
 margin-right:2px;
 padding-bottom:0;
 align-self:center;
 }

 
`
export const Span1 = styled.h1`
font-family:'Roboto';
font-size:20px;
color:#000000;
font-weight:600;
margin-left:4px;
margin-top:0;
margin-right:4px;
`

export const IcPara = styled.p`
font-family:'Roboto';
font-size:10px;
color:${props => (props.k ? '#3b82f6' : '#424242')};
font-weight:500;
`
export const Hr = styled.hr`
 border:1px solid #000000;
 width:100%;
 `
export const LoaderCon1 = styled.div`
display:flex;
flex-direction:${props => (props.fail ? 'column' : 'row')};
justify-content:center;
align-items:center;
height:100vh;
`
export const FailIm1 = styled.img`
width:40%;
`
export const Text1 = styled.div`
font-family:'Roboto';
font-size:${props => (props.h ? '20px' : '12px')};
color:${props => (props.h ? '#000000' : '#00306e')};
font-weight:${props => (props.h ? '600' : 'normal')};
margin-bottom:12px;
`
export const RetryButt1 = styled.button`
background-color:#4f46e5;
border-width:0px;
font-family:'Roboto';
font-size:13px;
color:#ffffff;
font-weight:600;
padding:10px;
border-radius:3px;
width:10%;
`
