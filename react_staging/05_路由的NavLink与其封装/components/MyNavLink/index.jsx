import React, {Component} from 'react';
import {NavLink} from  'react-router-dom'

class MyNavLink extends Component {
    render() {
        // const {children} = this.props
        return (
            <div>
                <NavLink activeClassName="atguigu"  className="list-group-item" {...this.props}/>
            </div>
        );
    }
}

export default MyNavLink;