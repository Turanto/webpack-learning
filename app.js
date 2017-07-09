import React from 'react'
import {render} from 'react-dom'

class App extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div>
                Hello world!
            </div>
        )
    }
}
render(
    <App/>,
    document.getElementById('root')
)