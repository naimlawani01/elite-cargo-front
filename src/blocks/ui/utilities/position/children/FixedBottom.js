import React from 'react';

const FixedBottom = () => {
    return (
        <div id="fixed-bottom">
            <h4>Fixed bottom</h4>
            <p>Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.</p>

            <figure className="highlight">
                    <pre><code className="language-html">&lt;div className=&quot;fixed-bottom&quot;&gt;...&lt;/div&gt;
                </code></pre>
            </figure>
        </div>
    );
};

export default FixedBottom;
