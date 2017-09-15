//import statements
import React from 'react';

//custom imports
import VideoListItem from './video_list_item';
 
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect = {props.onVideoSelect}  
				key={video.etag} 
				video={video} /> 
		);
	});

	return (
		<ul className= "col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;