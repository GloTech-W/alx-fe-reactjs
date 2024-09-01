import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    // Set cache time to 10 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes in milliseconds
    // Set stale time to 5 minutes
    staleTime: 1000 * 60 * 5, // 5 minutes in milliseconds
    // Refetch data when the window is focused
    refetchOnWindowFocus: true,
    // Keep previous data while new data is being fetched
    keepPreviousData: true
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
