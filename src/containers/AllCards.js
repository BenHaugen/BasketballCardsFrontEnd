import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";

class AllCards extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div className="ui segment all-cards">
          <div className="ui four column grid">
          <Form getFilteredData={this.props.getFilteredData}/>
            <div className="row">
              {this.props.cards.map((card, id) => {
                return <Card card={card} key={card.id} addCardToMyCards={this.props.addCardToMyCards}/>
              })}
              </div>
          </div>
    </div>
    );
  }
}

export default AllCards;

// {console.log('first console log in allcards', this.props.cards['data'])}
//     AllCards: {this.props.cards.map(card => console.log(card))}
//     {this.props.cards.map(card => card.first_name)}
