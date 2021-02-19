import '../../styles/navbar.css'
import React from 'react'
import SearchThumbnail from "./SearchThumbnail"

const VideoSearch = props =>{
        return(
            <div>
                <SearchThumbnail/>
                <SearchThumbnail/>
                <SearchThumbnail/>
                <SearchThumbnail/>
                <SearchThumbnail/>
            </div>
        );
}

export default VideoSearch;