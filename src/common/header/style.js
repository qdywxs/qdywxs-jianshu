import styled from "styled-components";  

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #eee;
  height: 56px;
  line-height: 56px;
  box-sizing: content-box;
  padding: 0 20px;
  
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
  & > img {
    height: 50px;  
  }
`;

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
  line-height: 56px;
  padding: 0 10px;
  color: #333;
  font-size: 17px;

  &:hover {
    background-color: #eee;
  }

`;

export const SearchArea = styled.div`
  float: left;
  position: relative;
  margin-left: 30px;

  .icon-search {
    position: absolute;
    right: 10px;
    top: 10px;

    color: #aaa;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
  }
`;

export const SearchInput = styled.input.attrs({
  placeholder: "搜索"
})`
  line-height: 36px;
  padding: 0 20px;
  width: 200px;
  font-size: 15px;
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
    background-color: #969696;
    color: #fff;
  }
`;

export const SearchPanel = styled.div`
  position: absolute;
  z-index: 1;
  width: 250px;
  padding: 16px;
  line-height: 1;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 4px 2px rgba(0,0,0,0.1);
  display: none;

  &::before {
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


`;

export const PanelTitle = styled.h3`
  color: #888;
  font-weight: normal;
`;

export const PanelChange = styled.div`
  float: right;
  font-size: 13px;
  color: #888;
  font-weight: normal;

  cursor: pointer;
`;

export const PanelLabels = styled.div`
  margin-top: 10px;
`;

export const LabelLink = styled.a`
  float: left;
  border: 1px solid #ccc;
  padding: 2px 4px;
  margin: 10px 10px 0 0;
  color: #888;
  border-radius: 4px;

  &:hover {
    border-color: #888;
  }
`;


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