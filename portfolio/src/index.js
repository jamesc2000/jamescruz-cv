import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//class Navbar extends React.Component
//{
    /*render()
    {
        // make navbar elements then put here
    }*/
//}

const name = 'James Laurence Cruz'
var clicked = 0

class Intro extends React.Component
{
    render()
    {
        return (
            <div className="name">
                {name}
            </div>
        );
        if (clicked === 1)
        {
            return (<Project />)
        }
    }
}

class Project extends React.Component
{
    render()
    {
        return (
            <div>
                <button>View Source</button>
                <button>Demo Project</button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <button onClick={() => {var clicked=1}}>Click Me!</button>
            </div>
        );
    }
}
  
// ========================================
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
 );
  