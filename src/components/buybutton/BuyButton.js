import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const BuyButton = () => { 
  
  return (
    <>
      <Link to="/cart">
        <Button variant="contained" color="primary" disableElevation >
          Checkout
        </Button>
      </Link>
    </>
  );
};

export default BuyButton