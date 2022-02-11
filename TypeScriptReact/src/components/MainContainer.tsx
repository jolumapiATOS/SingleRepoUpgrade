import React, { Component } from 'react'

export default class MainContainer extends Component {
    state = {
        info: null
    }

    async componentDidMount() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json();
        this.setState({
            info: data
        })
    }

  render() {
    let data: any[]
    if(this.state.info) {
        data = this.state.info
    } else {
        data = []
    }
    return (
      <div className='p-5 container-main-for-main'>
            {  data.length === 0 && <p>Loading</p> }
            { data.length !== 0 &&  data.map( (item: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }, index:number) => { return <p key={index} className='item-shadow'> {item.title} </p> } ) }
      </div>
    )
  }
}
