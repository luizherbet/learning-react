import React from 'react';
import Rating from './Rating';
import Card from 'react-bootstrap/Card';

// function Product(){
//   return(
//     <div>
//     </div>
//   )
// }

const Product = props => {
  return (
    <div style={{ width: '250px', margin: '10px' }}>
      <Card>
        {props.data && (
          <>
            <Card.Img src={props.data.imageUrl} />
            <Card.Body>
              <Card.Title>{props.data.productName}</Card.Title>
              <h2>{props.data.releasedData}</h2>
              <Card.Text>{props.data.description}</Card.Text>
              <Rating
                rating={props.data.rating}
                numOfReviews={props.data.numOfReviews}
              />
            </Card.Body>
          </>
        )}
      </Card>
    </div>
  );
};

export default Product;
