import React, { useEffect, useState } from "react";

export default function Pokie() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  async function loadUserPosts(userId) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const userPosts = await response.json();
      setPosts(userPosts);
      setUserId(userId);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg min-w-full">
      <h2 className="font-bold text-2xl text-gray-600">Select a section</h2>
      <div id="user-buttons" className="flex space-x-4 my-4">
        {[...Array(10)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => loadUserPosts(i + 1)}
            className={`px-4 py-2 rounded-md ${
              userId === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            User {i + 1}
          </button>
        ))}
      </div>
      <div id="content" className="text-gray-700 text-lg">
        {loading ? (
          <p className="text-gray-500">Loading posts for User {userId}...</p>
        ) : (
          posts.length > 0 ? (
            <div>
              <h3 className="text-xl font-semibold">📖 Posts by User {userId}</h3>
              {posts.map((post) => (
                <div key={post.id} className="bg-gray-200 p-4 rounded-md my-2">
                  <h4 className="font-bold">{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Welcome! Click a button to see the content change.</p>
          )
        )}
      </div>
    </div>
  );
}
