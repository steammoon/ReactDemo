import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
    //类初始化
    constructor(props){
        //父类传参执行函数
        super(props);
        this.state ={
            age: props.age
        }
        //this.age = this.props.age;
    }

    onMakeOlder(){
        this.age += 3;
        this.setState({
            age: this.state.age + 3
        })
        console.log(this.age);
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-xs-offset-11">
                        <div>youer name is {this.props.name}</div>
                        <div>youer age is {this.state.age}</div>
                        <ul>{this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}</ul>
                        <button onClick={() =>{this.onMakeOlder()}} className='btn btn-primary'>Make me older</button>
                    </div>
                </div>
            </div>
        );
    }
}


// 检查对象类型！！
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
};

