import './App.css';
import YTSearch from 'youtube-api-search';
import { memo, useEffect, useState } from 'react';
import Nav from './components/Nav/Nav';
import { Container } from './AppStyle';
import SearchBar from './components/SearchBar/SearchBar';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList/VideoList';

function App() {

  const [videos, setVideos] = useState(null);
  const [selectVideo , setSelectVideo] = useState(null);
  const [videoQuery, setVideoQuery] = useState("Latest gadgets review");


  const handleSearches = term =>
  YTSearch({ key: "Your api key here ", term }, videos => {
    setVideos(videos);
    setSelectVideo(videos[0]);
  });

   useEffect(() => {
    handleSearches("Latest gadgets review in english");
  }, []);

  return (
     <Container>
      <Nav>
        <center><SearchBar handleSearch={handleSearches}/></center>
        
      </Nav>
      <VideoDetail selectVideo={selectVideo}>
        <VideoList videos={videos} handleSelectVideo={selectedVideo => setSelectVideo(selectedVideo)}/>
      </VideoDetail>
     </Container>
  );
}

export default memo(App);
