import { useState } from 'react';
import './App.css'
import TweetCard from './components/TweetCard'

function App() {
  // Example state for a tweet's data
  const [tweetData, setTweetData] = useState({
    profileImage: 'https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg',
    name: 'React',
    username: 'reactjs',
    content: 'What are you building with React this week? ⚛️',
    comments: 150,
    retweets: 320,
    likes: 1200,
  });

  return (
    <div className="App">
      <TweetCard {...tweetData} />
    </div>
  )
}

export default App
