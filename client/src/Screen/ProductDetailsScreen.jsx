import { useParams } from "react-router-dom"
import products from "../products";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup,Card,Button, ListGroupItem } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductDetailsScreen = () => {
  const { id: productId } = useParams();
  console.log(productId);
const product= products.find((p) => p._id === productId );
console.log(product);
 
return (

<>

 <Link className="btn btn-light my-3" to="/">
  Back
</Link>
<Row>
  <Col md={5}>
  <Image src={product.image} alt={product.name} fluid
/>
  </Col>
  <Col md={4}>
  <ListGroup variant= "flush">
<ListGroupItem>
  <h3>{product.name}</h3>
</ListGroupItem>
<ListGroupItem>
  <Rating  value={product.rating} text={`${product.numReviews} reviews`}/>
</ListGroupItem>
<ListGroupItem> Description : {product.description}
</ListGroupItem>
  </ListGroup>
  </Col>
  <Col md={3}>
  <Card>
    <ListGroup variant="flush"> 
<ListGroupItem>
  <Row>
    <Col>Price:
    </Col>  
    <strong>${product.price}</strong>
  </Row>
</ListGroupItem>

<ListGroupItem>
  <Row>
    <Col>Status:
    </Col>  
    <strong>${product.countInStock >0 ? "In Stock" : "out of Stock"}</strong>
  </Row>
</ListGroupItem>

<ListGroupItem>
  <Button className="btn-block"
  type="button"
  disabled={product.countInStock === 0}>
    Add to Cart
  </Button>
</ListGroupItem>
    </ListGroup>
  </Card>
  </Col>
</Row> 

<Link className="btn btn-light my-3" to="/">
  Back
</Link>
</>
  )
}

export default ProductDetailsScreen