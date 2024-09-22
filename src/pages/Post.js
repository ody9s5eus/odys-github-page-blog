import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  { id: 1, title: '첫 번째 포스트', content: '이 포스트는 첫 번째 포스트의 본문입니다.' },
  { id: 2, title: '두 번째 포스트', content: '이 포스트는 두 번째 포스트의 본문입니다.' },
];

function Post() {
  const { id } = useParams();
  const post = posts.find(post => post.id === Number(id));

  if (!post) return <div>포스트를 찾을 수 없습니다.</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
