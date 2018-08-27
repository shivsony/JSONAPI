import React from 'react';
import './MainApp.css';
class MainApp extends React.Component {
    render(){
        return (
            <div className="wrapper">
                <button onClick={this.props.click}>all</button>
                <button>OnLine</button>
                <button>OffLine</button>
                {
                    this.props.array.map( (item,i) => (<li key={i}>{item}</li>) )
                }
            </div>
        )
    }
}

export default MainApp
