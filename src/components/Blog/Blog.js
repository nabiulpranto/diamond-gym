import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='blog-header'>Blog!</h1>
            <div className='blog-section'>
                <h2>How Does React Work?</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.</p>
            </div>
            <div className='blog-section'>
                <h2>What is the difference between props and state in react component?</h2>
                <p>Props are used to pass data from one component to another.
                    The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='blog-section'>

                <h2>Without Load data to API what else can 'useEffect' do?</h2>
                <p>Besides Load API data 'useEffect' Do some other work also. We tell React that our component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API</p>
            </div>
        </div>
    );
};

export default Blog;