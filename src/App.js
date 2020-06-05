import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
class App extends React.Component{
  render(){
    return(
      <div className='App'>
          <Content namaPengguna = {'ilman'}  statusPekerjaan = {'Unemploye'}/>
          <Header/>
      </div>
    )
  }
}
export default App