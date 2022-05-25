import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='fw-bold my-5 text-center text-info'>Some Common Questions of Our Users</h1>
            <hr />
            <div className=''>
            <h2 className='fw-bold'>How to improve <span className="text-warning">
            the performance of react application?</span></h2>
            <h5>
                1. When it's necessary, keep component state local.
                <br />
                2. To avoid unwanted re-renders, memorize React components.
                <br />
                3. React code splitting with dynamic import.
                <br />
                4. In React, windowing or list virtualization is used.
                <br />
                5. Images are loaded slowly in React. Lock after on it.
            </h5>
            </div>
            <div className='my-5'>
                <h2  className='fw-bold'>
                What are the different ways to <span className="text-warning">manage a state in a react application?</span>
                </h2>
                <h5>
                    1. Local state.
                    <br />
                    2. Global state.
                    <br />
                    3. Server state.
                    <br />
                    4. URL state.
                </h5>
            </div>
            <div className='my-5'>
                <h2 className='fw-bold'>
                    How does <span className="text-warning">prototypical inheritance work?</span>
                </h2>
                <h5>
                Prototypal inheritance is a javascript feature that allows you to add methods and properties to objects. It's a method that allows one object to inherit the properties and methods of another. We traditionally use Object.getPrototypeOf and Object. setPrototypeOf to get and set the [[Prototype]] of an object.
                </h5>
            </div>
            <div className='my-5'>
                <h2 className='fw-bold'>You have  an array of products. Each object has a name, price, description etc. <span className="text-warning">
                How will you implement a search to find products by name?</span> </h2>
                <h5>Firstly, i have to run a loop on the products array. Then I will get single product. Then i can show them to the UI by product.name in a p tag.</h5>
            </div>
            <div className='my-5'>
                <h2 className='fw-bold'>
                What is a unit test? <span className="text-warning">
                Why should write unit tests?
                </span>
                </h2>
                <h5>
                This is a sort of software testing in which the smallest testable module of an application, such as functions, procedures, or interfaces, is tested to see if it is fit for use.
                <br />
                Before code is deployed, unit testing verifies that it meets quality criteria. This promotes a stable engineering environment that prioritizes quality. Unit testing saves time and money across the product development life cycle, and it helps developers produce better code faster.
                </h5>
            </div>
        </div>
    );
};

export default Blog;