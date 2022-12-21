import React from 'react';
import './Section.css'

const Section = () => {
    return (
        <div className='theory-section'>
            <div className="difference-table">
                <h2>Difference between props and state</h2>

                <table>
                    <tr>
                        <th>SL</th>
                        <th>Props</th>
                        <th>State</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Props are read-only.</td>
                        <td>State changes can be asynchronous.</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Props are immutable.</td>
                        <td>State is mutable</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Props can be accessed by the child component.</td>
                        <td>State cannot be accessed by child components.</td>
                    </tr>
                    <tr>
                        <td>04</td>
                        <td>Stateless component can have Props.</td>
                        <td>Stateless components cannot have State.</td>
                    </tr>
                    <tr>
                        <td>05</td>
                        <td>Props make components reusable.</td>
                        <td>State cannot make components reusable.</td>
                    </tr>
                </table>
            </div>
            <div className="react-work">
                <h3>How does React works?</h3>
                <p>
                    React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.
                </p>
                <h5>What is declarative code?</h5><p>React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app.</p>

            </div>

        </div>
    );
};

export default Section;