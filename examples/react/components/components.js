/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect, memo } from 'react'

class ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: false,
    };
    this.someCustomField = true;
    this.someOtherCustomField = props.something;
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate() {}

  render() {
    return (
      <div>

      </div>
    )
  }
}

function FunctionalComponent({ something }) {
  const [someState, setSomeState] = useState(false);
  const someCustomField = true;
  const someOtherCustomField = something;

  useEffect(() => {}, []);

  useEffect(() => {});

  useEffect(() => {
    return () => {}
  }, []);

  return (
    <div>

    </div>
  )
}

React.memo(FunctionalComponent, (prevProps, prevState) => true);


