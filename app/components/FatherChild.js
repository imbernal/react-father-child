import React from 'react';
import {children,numberVotes}from '../data.js';

class Child extends React.Component{
    constructor(props){
        super(props);
        this.handleNumbVotesUp=this.handleNumbVotesUp.bind(this);
        this.handleNumbVotesDown=this.handleNumbVotesDown.bind(this);
    }

handleNumbVotesUp(){
    this.props.onUpVote(this.props.id);
}

handleNumbVotesDown(){

  this.props.onDownVote(this.props.id);
}

    render(){
// console.log(this.props.handleNumbVotes);

        return(

            <div className="childInfo">
                <ul>
                    <li>

                        <div className="firstName">{this.props.firstName}</div>
                        <div className="lastName">{this.props.lastName}</div>
                        <div className="gender">{this.props.gender}</div>

                        <div className="countV">
                            <img onClick={this.handleNumbVotesUp} src='../app/pics/add.png' className="icon"/>
                              <span className="countVotes">{this.props.votes}</span>
                             <img onClick={this.handleNumbVotesDown} src='../app/pics/minus.png' className="icon"/>
                        </div>

                        {/* <img src={require(`../pics/child1.jpg`)}/> */}
                        <select className="coolOrN" >
                            <option value="Cool">Cool</option>
                            <option value="Not cool">Not Cool</option>
                        </select>

                    </li>
                    <img src={this.props.img} className="picimg"/>

                </ul>

            </div>

        );
    }
}

class FatherChild extends React.Component{
    constructor(props){
        super(props);
        this.state={
            child:[]
        }
        this.handleChildUpVotes=this.handleChildUpVotes.bind(this);
        this.handleChildDownVotes = this.handleChildDownVotes.bind(this);
      }


    componentDidMount(){
        this.setState({child:children});
    }

    handleChildUpVotes(childIds){
        const nextChild=this.state.child.map((child)=>{
            if(child.id === childIds){
                return Object.assign({},child,{
                    votes:child.votes + 1
                });
            }else{
                return child;
            }
        });
        console.log(nextChild);
        this.setState({
            child:nextChild
        });


      }

      handleChildDownVotes(childIds){

        const nextChild = this.state.child.map((child) => {

          if (child.id === childIds){

            return Object.assign({} , child , {
              votes: child.votes - 1 > 0 ? child.votes - 1 : child.votes
            });
          }else{
            return child;
          }
        });
        this.setState({
            child:nextChild
        });
      }

    render(){
        // console.log(this.state.child);

        const sortedVotes=this.state.child.sort((a,b)=>(
            b.votes - a.votes
        ));

            const displayInfo=this.state.child.map((child)=>(
                <Child
                    key={'child-'+ child.id}
                    id={child.id}
                    firstName={child.firstName}
                    lastName={child.lastName}
                    gender={child.gender}
                    img={child.img}
                    onUpVote={this.handleChildUpVotes}
                    onDownVote={this.handleChildDownVotes}
                    votes={child.votes}
                />
            ));

        return(
            <div className="item">
                {displayInfo}
            </div>

        );



    }


}
export default FatherChild;
