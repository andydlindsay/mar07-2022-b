import React from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    // super();
    super(props);

    this.state = {
      counter: 0,
      moreStuff: 'hello world',
      newKey: null,
      interviewer: props.interviewer || null
    };

    // this.increment = this.increment.bind(this);
  }

  increment = () => {
    // DON'T DO THIS
    // this.state.counter += 1;

    this.setState({ counter: this.state.counter + 1, newKey: 'value' });
    // this.setState(prev => ({ counter: prev.counter + 1 }));
  }

  render() {
    const {heading} = this.props;

    return (
      <div>
        <h2>This is the class-based component</h2>
        <h2>{heading}</h2>

        <h2>The current count is {this.state.counter}</h2>
        <button onClick={this.increment}>Click me!</button>
      </div>
    );
  }
}

export default ClassBased;

export const whatever = 'hello';

// const component = new ClassBased(props);
// component.props = props;
