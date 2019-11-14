import React from 'react'
import request from 'superagent';

class Component extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
       list: [],
    }
  }
  // ComponentDidMount is trigger right after components mount,
  // it's the right place for side effects like data fetching
  async componentDidMount() {
    try {
      const list = await request.get("url");
      this.setState({ list });
    } catch (error) {
      throw new Error('failed to fetch')
    }
  }

  render() {
    const { list } = this.state;
    return(
      <div>
        <h1>Some list</h1>
      <ul>
        {list.map(listItem => (
          <div key={listItem.name}>
            <h3>{listItem.name}</h3>
          </div>
        ))}
      </ul>
      </div>
    )
  }


}


export default Component;
