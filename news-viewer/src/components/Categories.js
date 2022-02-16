import React from 'react';
import styled, { css } from 'styled-components';
import { useState, useCallback } from 'react';

const categories = [
  {
    name: 'all',
    text: '전체 보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}
  & + & {
    margin-left: 1rem;
  }
`;
function Categories({ category, onSelect }) {
  return (
    <CategoriesBlock>
      {categories.map((item) => (
        <Category
          key={item.name}
          active={category === item.name}
          onClick={() => onSelect(item.name)}
        >
          {item.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default Categories;