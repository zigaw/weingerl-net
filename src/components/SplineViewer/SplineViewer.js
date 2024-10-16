import React from 'react';
import './SplineViewer.css';
const SplineViewer = () => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<spline-viewer url="https://prod.spline.design/vlV4CjAYvJ0SDx3U/scene.splinecode"></spline-viewer>`
            }}
        />
    );
};

export default SplineViewer;