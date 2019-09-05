import styled, {keyframes} from "styled-components";  

export const HeaderWrapper = styled.header`
  box-sizing: content-box;
  padding: 0 20px;
  height: 56px;
  
  line-height: 56px;
  
  border-bottom: 1px solid #eee;
  
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const Logo = styled.a.attrs({ 
  href: "/"
})`
  float: left;
  height: 56px;
  & > img {
    height: 50px;  
  }
`;


/*🚀Navbar 相关~*/
export const Navbar = styled.ul`
  float: left;

`;

export const ItemList = styled.li`
  float: left;
  padding: 0 4px;

  &.active > a{
    color: #e86f5e;  
  }

  &.active > a:hover {
    background-color: #fff;
  }
`;

export const LinkList = styled.a`
  display: block;
  padding: 0 10px;
  
  font-size: 17px;
  line-height: 56px;
  color: #333;
  

  &:hover {
    background-color: #eee;
  }

`;


/*🚀SearchArea 相关~*/
export const SearchArea = styled.div`
  position: relative;

  float: left;  
  margin-left: 30px;

  .icon-search {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 32px;
    height: 32px;  

    color: #aaa;
    line-height: 32px;  
    text-align: center;  

    border-radius: 50%;
  }
`;

export const SearchInput = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 200px;
  padding: 0 20px;
  
  font-size: 15px;
  line-height: 36px;

  border: none;  
  background-color: #eee;
  border-radius: 18px;
  outline: none;

  transition: all .3s;  

  &:focus {
    width: 240px;
  }

  &:focus~div {
    display: block;
  }

  &:focus + .icon-search {
    color: #fff;
    background-color: #969696;
  }
`;

export const SearchPanel = styled.div`
  position: absolute;
  z-index: 1;

  width: 250px;
  padding: 16px;

  line-height: 1;  /*❗️重置行高。*/

  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 4px 2px rgba(0,0,0,0.1);  

  display: none;

  &::before {  /*❗️做出向上的“三角”。*/
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 30px;
    width: 14px;
    height: 14px;
    background-color: #fff;
    transform: rotateZ(45deg);
    box-shadow: -2px -2px 2px -2px rgba(0,0,0,0.1);
  }

  &:hover {
    display: block;
  }


`;

export const PanelTitle = styled.h3`
  color: #888;
  font-weight: normal;
`;


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const PanelChange = styled.div`
  float: right;
  
  color: #888;
  font-size: 13px;
  font-weight: normal;

  cursor: pointer;  

  &:hover {
    color: #333;
  }
  
  .refresh {
    display: inline-block;
    animation: ${rotate}  linear 0.3s infinite;
  }
`;






export const PanelLabels = styled.div`
  margin-top: 10px;
`;

export const LabelLink = styled.a`
  float: left;
  
  padding: 2px 4px;
  margin: 10px 10px 0 0;

  color: #888;

  border: 1px solid #ccc;
  border-radius: 4px;
  

  &:hover {
    border-color: #888;
  }
`;



/*🚀Extra 相关~*/
export const Extra = styled.div`
  float: right;

  .icon-textsize {
    float: left;
    font-size: 25px;
    color: #888;
    
    cursor: pointer;
  }

`;

export const ExtraLink = styled.a`
  float: left;
  padding: 10px 20px;
  margin: 10px 0 0 20px;
  font-size: 15px;
  line-height: 1;


  &.login {
    color: #888;
    background-color: #fff;
  }

  &.register {
    color: #e56e5d
    border: 1px solid #e56e5d
    border-radius: 30px;
  }

  &.writing {
    color: #fff;
    background-color: #e56e5d;
    border-radius: 30px;
    
  }
`;