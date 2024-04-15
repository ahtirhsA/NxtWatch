import styled from 'styled-components'

export const VideosContainer = styled.div`
 background-color:#ebebeb;
 padding:20px;
 width:60%;
 flex-grow:1;
 max-height:864vh;
`

export const SearchInput = styled.input`
 width:100%;
 padding:5px;
 background-color:#ffffff;
 border:1.2px solid  #909090;
 font-family:'Roboto';
 font-size:15px;
 color:#606060;
cursor:pointer;
outline:none;
`

export const Divider = styled.div`
 display:flex;
 flex-direction:row;
 align-items:flex-start;
 width:${props => (props.d ? '50%' : '')};
`
export const Search = styled.button`
 background-color: #cccccc;
 padding:6.4px;
border:1.2px solid  #909090;
font-size:15px;
color:#606060;
width:12%;
display:flex;
flex-direction:row;
justify-content:center;
`
export const VideosUnorder = styled.ul`
padding-left:0px;
width:100%;
list-style-type:none;
display:flex;
flex-direction:row;
align-items:flex-start;
flex-wrap:wrap;
`
export const LoaderCon = styled.div`
display:flex;
flex-direction:${props => (props.fail ? 'column' : 'row')};
justify-content:center;
align-items:center;
height:100vh;
`
export const FailIm = styled.img`
width:40%;

`
export const Text = styled.div`
font-family:'Roboto';
font-size:${props => (props.h ? '20px' : '12px')};
color:${props => (props.h ? '#000000' : '#00306e')};
font-weight:${props => (props.h ? '600' : 'normal')};
margin-bottom:12px;
`
export const RetryButt = styled.button`
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
