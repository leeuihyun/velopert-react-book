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
const textMap = {
    login : '로그인',
    register : '회원가입'
}

function AuthForm({type}) {
    const text = textMap[type];
  return (
  <AuthFormBlock>
      <h3>{text}</h3>
      <form>
          <StyledInput placeholder = "아이디" name = "username" autoComplete = "username"></StyledInput>
          <StyledInput placeholder = "비밀번호" name = "password" autoComplete="new-password" type = "password"></StyledInput>
          {type === 'register' && (
          <StyledInput placeholder = "비밀번호 확인" name = "passwordConfirm" autoComplete = "new-password" type = "password"></StyledInput>
      )}
      </form>
      
      <Button cyan fullWidth style = {{marginTop : '1rem'}}>{text}</Button>
      <Footer>
          {type === 'register' ? (
              <Link to = '/login'>로그인</Link>
          ) : (
                <Link to = "/register">회원가입</Link>
          )}    
      </Footer>
  </AuthFormBlock>)
}

export default AuthForm;
