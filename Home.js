import React, { Component } from 'react'
import Header from './Header'
import Aux from './Auxiliary'

class Home extends Component {
  render(){
    return (
      <Aux>
        <Header />
        <div>
          <img alt="pollution" style={{width: 300, height: 300, margin:10}} src="https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Magazines/2019/June-July/plastic-seal-JJ19-1200x628.ashx"></img>
          <img alt="pollution" style={{width: 300, height: 300, margin:10}} src="https://149366112.v2.pressablecdn.com/wp-content/uploads/2015/12/Albatross_at_Midway_Atoll_Refuge_8080507529.jpg"></img>
          <img alt="pollution" style={{width: 300, height: 300, margin:10}} src="https://passportocean.com/wp-content/uploads/2017/11/ocean-pollution-.jpg"></img>
        </div>
      </Aux>

    )
  }
}


export default Home;
