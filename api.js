const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
const port = 3000;

// Enable CORS for all routes and origins
app.use(cors());

// Simulate hardcoded posts and users
const users = [
  { id: 'user1', name: 'John', handle: '@john45', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1-tiy7YDb83_KFy-AySQBYfkuEAN75tg5Q&s' },
  { id: 'user2', name: 'Alice', handle: '@aliceS32', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VKb4WuFj-LEEMIUSb8qJ52FFituChmcvkw&s' },
  { id: 'user3', name: 'Bob', handle: '@barca_fan125', profile_pic: 'https://imageio.forbes.com/specials-images/imageserve/64d609a7e451f8dae9d9eed6/FC-Barcelona-and-Peru-legend-Hugo-Sotil-has-passed-away-/960x0.jpg?format=jpg&width=960' }
];

const posts = [
  { 
    id: 1, 
    post_text: "Don't wait for the perfect moment, make the moment perfect. #Monday Motivation ✨✨✨", 
    user: 'user1', 
    likes: 124, 
    reposts: 2, 
    views: "1.5K", 
    replies: 56, 
    timestamp: new Date('2025-01-01T10:00:00Z')
  },
  { 
    id: 2, 
    post_text: 'Today is a fresh start, full of possibilities and opportunities waiting to be seized.', 
    user: 'user1', 
    likes: 5, 
    reposts: 0, 
    views: 50, 
    replies: 1, 
    timestamp: new Date('2024-01-02T16:00:00Z')
  },
  { 
    id: 3, 
    post_text: 'The only limit is the one you set for yourself. Break free. 👊', 
    user: 'user2', 
    likes: 203, 
    reposts: 58, 
    views: "3.1K", 
    replies: 42, 
    timestamp: new Date('2024-08-12T12:30:00Z')
  },
  { 
    id: 4, 
    post_text: 'New day, new post! #FreshStart', 
    user: 'user2', 
    likes: 100, 
    reposts: 19, 
    views: "1.3K", 
    replies: 24, 
    timestamp: new Date('2024-06-04T16:28:00Z')
  },
  { 
    id: 5, 
    post_text: 'Your dreams won’t work unless you do. #WednesdayWisdom 💪', 
    user: 'user3', 
    likes: 50, 
    reposts: 79, 
    views: 500, 
    replies: 23, 
    timestamp: new Date('2024-01-05T19:00:00Z')
  },
  { 
    id: 6, 
    post_text: 'Visca el Barça! 🔵🔴 #ForçaBarça', 
    user: 'user3', 
    likes: "3.6K", 
    reposts: "209", 
    views: "50K", 
    replies: 529, 
    timestamp: new Date('2025-01-01T17:27:00Z')
  }
];

// Helper function to get user details for a post
const getUserDetails = (userId) => {
  return users.find(user => user.id === userId);
};

// Endpoint to get random posts, based on count query parameter
app.get('/posts', (req, res) => {
  // Get the 'count' query parameter (defaults to 7 if not specified)
  const count = parseInt(req.query.count) || 7; // Default to 7 if no count is given

  // Randomly shuffle the posts array and take the 'count' number of posts
  const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, count); 

  // Add user details to each post
  const postsWithUserDetails = randomPosts.map(post => {
    const userDetails = getUserDetails(post.user);
    return {
      ...post,
      handle: userDetails.handle,
      profile_pic: userDetails.profile_pic,
      timestamp: post.timestamp.toISOString() // Convert timestamp to string format
    };
  });

  res.json(postsWithUserDetails);
});

// Endpoint to get posts for a specific user
app.get('/posts/:user', (req, res) => {
  const userId = req.params.user;
  const userPosts = posts.filter(post => post.user === userId);
  
  if (userPosts.length === 0) {
    return res.status(404).json({ message: 'No posts found for this user' });
  }

  // Add user details to each post
  const postsWithUserDetails = userPosts.map(post => {
    const userDetails = getUserDetails(post.user);
    return {
      ...post,
      handle: userDetails.handle,
      profile_pic: userDetails.profile_pic,
      timestamp: post.timestamp.toISOString() // Convert timestamp to string format
    };
  });

  res.json(postsWithUserDetails);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
