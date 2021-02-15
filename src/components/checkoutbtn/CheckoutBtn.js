import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const CheckoutBtn = () => { 
  
  return (
    <>
      <Link to="/cart">
        <Button variant="contained" color="secondary" disableElevation >
          Checkout
        </Button>
      </Link>
    </>
  );
};

export default CheckoutBtn