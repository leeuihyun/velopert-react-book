import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

/*
    회원가입 또는 로그인 폼을 보여 줍니다.
*/
const AuthFormBlock = styled.div`
    h3{
        margin : 0;
        color : ${palette.gray[8]};
        margin-bottom : 1rem;
    }
`;

const StyledInput = styled.input`
    font-size : 1rem;
    border : none;
    border-bottom : 1px solid ${palette.gray[5]};
    padding-bottom : 0.5rem;
    outline : none;
    width : 100%;
    &:focus {
        color : $oc-teal-7;
        border-bottom : 1px solid ${palette.gray[7]};
    }
    &+&{
        margin-top : 1rem;
    }
`

const Footer = styled.div`
    margin-top : 2rem;
    text-align : right;
    a{
        color : ${palette.gray[6]};
        text-decoration : underline;
        &:hover{
            color : ${palette.gray[9]};
        }
    }
`

function AuthForm() {
  return (
  <AuthFormBlock>
      <h3>로그인</h3>
      <form>
          <StyledInput placeholder = "아이디" name = "username" autoComplete = "username"></StyledInput>
          <StyledInput placeholder = "비밀번호" name = "password" autoComplete="new-password"></StyledInput>
          <Button cyan fullWidth>로그인</Button>
      </form>
      <Footer>
          <Link to = "/register">회원가입</Link>
      </Footer>
  </AuthFormBlock>)
}

export default AuthForm;
