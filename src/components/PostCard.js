import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// PostCard 스타일 정의
const Card = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const Summary = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ReadMore = styled(Link)`
  font-size: 16px;
  color: #0073e6;
  text-decoration: none;
  margin-top: auto; // 카드 하단에 고정

  &:hover {
    text-decoration: underline;
  }
`;

function PostCard({ post }) {
  return (
    <Card>
      <Title>{post.title}</Title>
      <Summary>{post.summary}</Summary>
      <ReadMore to={`/post/${post.id}`}>Read more</ReadMore>
    </Card>
  );
}

export default PostCard;
