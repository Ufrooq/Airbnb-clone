import React from 'react';

const Empty = ({ title }) => {
    return (
        <div className="empty_">
            <i class="fa-regular fa-face-sad-tear fa-beat-fade"></i>
            <h4>No {title} found !</h4>
        </div>
    );
};

export default Empty;