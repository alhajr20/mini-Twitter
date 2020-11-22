import React from 'react';

import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div>
            <button type="button" className="filterBtn btn">All</button>
            <button type="button" className="filterBtnSecond btn">Liked</button>
        </div>
    )
}

export default PostStatusFilter;