import React from 'react';

const Question = () => {
    return (
        <div className='m-2 p-3'>
            <h5>How react works?</h5>
            <p>Answer: We know that, React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. We can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element </p>
            <h5>How Use State works?</h5>
            <p>Answer: We know that, Use State declares a “state variable”. useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React. The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)</p>
        </div>
    );
};

export default Question;