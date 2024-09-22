import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const posts = [
  { id: 1, title: '첫 번째 포스트', summary: '첫 번째 포스트의 요약입니다.' },
  { id: 2, title: '두 번째 포스트', summary: '두 번째 포스트의 요약입니다.' },
];

const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 20px;
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const PostCard = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const PostTitle = styled.h2`
  font-size: 20px;
  color: #333;
`;

const PostSummary = styled.p`
  font-size: 16px;
  color: #666;
`;

function Home() {
  return (
    <Container>
      <PostList>
        {posts.map(post => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <PostCard>
              <PostTitle>{post.title}</PostTitle>
              <PostSummary>{post.summary}</PostSummary>
            </PostCard>
          </Link>
        ))}
      </PostList>
    </Container>
  );
}

export default Home;
