import React from 'react'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0, 
            contentPertama : 'ilman ganteng banget',
        }
    }
    prosesIncrement(){
        this.setState(
            {
                count : this.state.count + 1
            },
            ()=>{
                console.log(this.state.count)
            }
        )
    }
    prosesIncrementLimaKali(){
        this.setState(
            prevState=>({
                count : prevState.count + 1
            }),()=>{
                console.log(this.state.count)
            }
        )
    }
    limatKali(){
        this.prosesIncrementLimaKali()
        this.prosesIncrementLimaKali()
        this.prosesIncrementLimaKali()
        this.prosesIncrementLimaKali()
        this.prosesIncrementLimaKali()
    }
    render(){
        return(
            <div className='header'>
                <p>Content Pertama : {this.state.contentPertama}</p>
                <br/>
                <h4>Count : {this.state.count}</h4>
                <button onClick={()=>{
                    this.prosesIncrement()
                }}>Hit Me!!</button>
                <button onClick={()=>{
                    this.limatKali()
                }}>Lima Kali</button>
            </div>
        )
    }
}
export default Header