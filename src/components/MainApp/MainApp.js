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
                <button onClick={this.props.click}>OnLine</button>
                <button onClick={this.props.click}>OffLine</button>
              </header>
              { this.props.array.map( (items,i) =>  (
                < List
                  logo={this.props.image}
                  game={this.props.game}
                  channel={items}
                  details={this.props.details}
                  key={i}
                />
              )
            )}
            </div>
        )
    }
}

export default MainApp
