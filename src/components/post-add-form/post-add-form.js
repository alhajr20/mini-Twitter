import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="What's happening?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn"
                onClick={() => onAdd('Hello')} >Add</button>
        </div>
    )
}

export default PostAddForm;