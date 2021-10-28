import React, {Component} from "react"


class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            age: this.props.age
        }
    }
    render() {
        return  <div>
                    <h1>{this.props.firstName} {this.props.lastName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair: {this.props.hair}</p>
                    <button onClick={this.birthday}>Birthday Button</button>
                </div>
    }
    birthday = () => {
        let birthday = this.state.age
        this.setState({age: birthday+=1});
    }
}

export default PersonCard;
