import React from 'react';
import './MainApp.css';
import List from '../List/List';;
class MainApp extends React.Component {
    render(){
        var data = this.props.data
        return (
            <div className="wrapper">
              <header className="header">
                <h1>TWITCH STREAMERS</h1>
                <button onClick={this.props.clickAll}>all</button>
                <button onClick={this.props.clickOnLine}>OnLine</button>
                <button onClick={this.props.clickOffLine}>OffLine</button>
              </header>
              { data && data.filter((item)=> {
                if(this.props.all){
                  return item
                }
                if(this.props.onLine){
                  return item.online
                }
                if(this.props.offLine){
                  return item.online===false
                }
                return '';
              }
              ).map( (items,i) =>  {
                  return (
                    < List
                      logo={data && items.logo}
                      game={data && items.game}
                      url={data && items.url}
                      channel={data && items.name}
                      details={data && items.online ? items.status : 'offline'}
                      key={i}
                    />
                )
              }
            )
          }
            </div>
        )
    }
}

export default MainApp
