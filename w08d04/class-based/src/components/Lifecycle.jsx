import React from 'react';

class Lifecycle extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      interval: null
    };
  }

  // any setup you need to do; called only one time
  // data fetching, set up a socket connection, set up an interval/timer
  // useEffect(() => {}, []);
  componentDidMount() {
    console.log('the component has mounted');

    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 2000);

    this.setState({ interval }); 
  }

  // fires every time the component receives new props or on updates to state
  // compare old state/props vs new state/props to check for changes
  // useEffect(() => {}, [props.interviewer]);
  componentDidUpdate(prevProps, prevState) {
    console.log('the component has updated');
    if (prevProps.interviewer !== this.props.interviewer) {
      // fetch new interviewer data
    }
  }

  // fires only once, right before the component is removed from the DOM
  // perfect for cleanup
  // useEffect(() => return cleanup, []);
  componentWillUnmount() {
    console.log('clearing the interval');
    clearInterval(this.state.interval);

    console.log('the component will unmount from the DOM');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle methods</h2>
        <label>Username</label>
        <input 
          value={this.state.username}
          onChange={(event) => this.setState({ username: event.target.value})}
        />
      </div>
    );
  }
}

export default Lifecycle;
