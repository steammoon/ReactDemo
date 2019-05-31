import React, { Component } from 'react';

class Header extends Component {
    render() {
        let content = "";
        if(true){
            content = "Hello!!!"
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-xs-offset-11">
                        <h1>Header</h1>
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
