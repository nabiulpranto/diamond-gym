import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='blog-header'>Blog</h1>
            <div className='blog-section'>
                <h2>How Does React Work?</h2>
                <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
            </div>
            <div className='blog-section'>
                <h2>What is the difference between props and state in react component?</h2>
                <p>Props are used to pass data from one component to another.
                    The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='blog-section'>

                <h2>Without Load data to API what else can 'useEffect' do?</h2>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. </p>
            </div>
        </div>
    );
};

export default Blog;