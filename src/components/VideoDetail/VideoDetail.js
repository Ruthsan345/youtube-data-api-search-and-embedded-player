import React, { memo } from 'react'
import { Divider, Frame, VideoChannel, VideoContainer, VideoDescription, VideoTitle, VideoWrapper } from './VideoDetailStyle';

function VideoDetail({selectVideo, children}) {
    if(!selectVideo) return null;
    const {videoId} = selectVideo.id,
    { title, channelTitle, description} =  selectVideo.snippet, 
    url = `https://youtube.com/embed/${videoId}`;

    console.log('videos', selectVideo)
  return (
    <VideoContainer>
    <VideoWrapper>
      <Frame src={url} title={title} />
      <VideoTitle>{title}</VideoTitle>
      <VideoChannel>{channelTitle}</VideoChannel>
      <Divider />
      <VideoDescription>{description}</VideoDescription>
    </VideoWrapper>
    {children}
  </VideoContainer>  )
}
export default memo(VideoDetail);