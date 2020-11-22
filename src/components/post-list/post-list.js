import React from 'react';

import './post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({twitts, onDelete}) => {

    const elements = twitts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="twitts-item">
                <PostListItem 
                    {...itemProps} 
                    onDelete={() => onDelete(id)} />
            </li>
        )
    });

    return (
        <ul className="twitts-list">
            {elements}
        </ul>
    )
}

export default PostList;