import React from 'react';
import './MainApp.css';
import List from '../List/List';;
class MainApp extends React.Component {
    render(){
        return (
            <div className="wrapper">
              <header className="header">
                <h1>TWITCH STREAMERS</h1>
                <button onClick={this.props.click}>all</button>
                <button>OnLine</button>
                <button>OffLine</button>
              </header>
              < List logo={this.props.image} game={'new game'}/>
            </div>
        )
    }
}

export default MainApp
