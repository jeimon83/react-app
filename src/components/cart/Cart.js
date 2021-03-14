import React, { useState } from "react"
import { useCartContext } from "../../context/CartContext.js"
import Button from '@material-ui/core/Button';
import { getFirestore } from '../../firebase'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Cart Items', 'Shipping Details', 'Payment', 'Order Confirmed']
}

const Cart = () => {
  const { 
    list,
    addOneitem,
    removeOneitem,
    removeItem, 
    totalPrice,
    totalItems,
    resetCart
   } = useCartContext()

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [address, setAddress] = useState('')
   const [zip, setZip] = useState('')
   const [city, setCity] = useState('')
   const [province, setProvince] = useState('')
   const [cardName, setCardName] = useState('')
   const [cardnumbers, setCardNumbers] = useState('')
   const [cardExpire, setCardExpire] = useState('')
   const [cardCode, setCardCode] = useState('')
   const [docType, setDocType] = useState('')
   const [docNumber, setDocNumber] = useState('')
   const [orderId, setOrderId] = useState()
   console.log(docType)

  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1) }
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1) }

  const addOne = item => {
    let stock = parseInt(item.stock)
    if (stock === item.count) {
    }else{
      addOneitem(item)
    }
  }
  const removeOne = item => removeOneitem(item)
  const removeAll = item => removeItem(item)

  const total_price = () => totalPrice()
  const total_items = () => totalItems()

  const [total, setTotal] = useState('')

  const createOrder = () => {
    setTotal(totalPrice())
    handleNext()
    let newDate = new Date()
    let newOrder = { 
      buyer: { name: name, email: email, phone: phone, address: address, zip: zip, city: city, province: province },
      items: [...list], date: newDate, total: total_price() 
    }

    const fsDB = getFirestore()
    const orderCollection = fsDB.collection('orders')
    orderCollection.add(newOrder).then((value) => {
     setOrderId(value.id)
    })

    resetCart(list)
  }

  return (
    <>
    <div className="steps-width">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </div>
      
      { activeStep === 0 ? 
        <div>
          {list.map((item, key) => (
            <div key={key} className="grid">
              <div></div>
              <div><img className="cart-image" src={item.img} alt="."/></div>
              <div className="details">
                {item.count} x {item.title}: $ {item.price * item.count}
              </div>
              <div className="btn-x" >
                <Button variant="contained" color="primary" onClick={() => addOne(item) }>+</Button>
              </div>
              <div className="btn-x" >
                <Button variant="contained" onClick={() => removeOne(item) }>-</Button>
              </div>
              <div className="btn-x" >
                <Button variant="contained" color="secondary" onClick={() => removeAll(item)}>x</Button>
              </div>
              <div></div>
            </div>
          ))}
          <div className="info">
            {(total_items() > 0) ?
              <div>Total ${total_price()}</div>
              :
              <div>The cart is empty</div>
            }
          </div>
        </div> 
      : 
      null 
      }

      { activeStep === 1 ?
      <div className="form-container">
        <Form className="form-shipping">
          <Form.Row>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="name" placeholder={ name ? name : "Enter your full name" } onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder={ email ? email : "Enter your email" } onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder={ address ? address : "Enter your address" } onChange={(e) => setAddress(e.target.value)}/>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="zip" placeholder={ zip ? zip : "Enter your zip code" } onChange={(e) => setZip(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" placeholder={ phone ? phone : "Enter your phone" } onChange={(e) => setPhone(e.target.value)}/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="city" placeholder={ city ? city : "Enter your city" } onChange={(e) => setCity(e.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formProvince">
            <Form.Label>Province</Form.Label>
            <Form.Control type="province" placeholder={ province ? province : "Enter your province" } onChange={(e) => setProvince(e.target.value)}/>
          </Form.Group>
          </Form.Row>
        </Form>
      </div>
      : 
      null 
      }

      { activeStep === 2 ?
        <div className="form-container">
          <Form className="form-payment">
            <Form.Group controlId="cardName">
              <Form.Label>Card Name</Form.Label>
              <Form.Control type="card_name" placeholder="Enter card name" onChange={(e) => setCardName(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="cardNumbers">
              <Form.Label>Card Numbers</Form.Label>
              <Form.Control type="card_numbers" placeholder="Enter card numbers" onChange={(e) => setCardNumbers(e.target.value)}/>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="cardExpire">
                <Form.Label>Card Expiration</Form.Label>
                <Form.Control type="card_expiration" placeholder="MM/YY" onChange={(e) => setCardExpire(e.target.value)}/>
              </Form.Group>
              <Form.Group as={Col} controlId="cardCode">
                <Form.Label>Card Code</Form.Label>
                <Form.Control type="card_code" placeholder="Enter card code" onChange={(e) => setCardCode(e.target.value)}/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="docType">
              <Form.Label>Doc. Type</Form.Label>
                <Form.Control as="select" className="mr-sm-2" custom onChange={(e) => setDocType(e.target.value)}>
                  <option value="DNI">Choose...</option>
                  <option value="DNI">DNI</option>
                  <option value="LC">LC</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="docNumber">
                <Form.Label>Identification Number</Form.Label>
                <Form.Control type="doc_number" placeholder="Enter your identification number" onChange={(e) => setDocNumber(e.target.value)}/>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      : 
      null 
      }

      { activeStep === 3 ?
        <div className="order-container">
          <h1 style={{"textAlign": "center"}}>Congratulations!</h1>
          <h2 style={{"textAlign": "center"}}>Order ID: {orderId}</h2>
          <Form className="order-info">
            <Form.Row>
              <Form.Group as={Col}>
              <div className="title">SHIPPING DETAILS</div>         
              <Form.Control type="name_phone" placeholder={ name + " - Phone " + phone  } className="strong"/>
              <Form.Control type="complete_address" placeholder={ address + " - CP " + zip + " - " + city + ", " + province } className="strong"/>
              </Form.Group>
              <Form.Group as={Col}>
              <div className="title">PAYMENT </div>
              <Form.Control type="card_numbers" placeholder={ "Card Number " + cardnumbers } className="strong"/>
              <Form.Control type="total_amount" placeholder={ "Total Amount: $ " + total } className="strong"/>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      :
      null
      }

      <div className="info">
      { activeStep === 0 ?
        <div>
          <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
            Next to Shipping
          </Button>
        </div>
      :
      null
      }
      </div>


      <div className="info">
      { activeStep === 1 ?
        <div>
          <Button variant="contained" color="secondary" onClick={handleBack} className={classes.button}>
            Back to Cart Items
            </Button>
          <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
            Next to Payment
          </Button>
        </div>
      :
      null
      }
      </div>


      <div className="info">
      { activeStep === 2 ?
        <div>
          <Button variant="contained" color="secondary" onClick={handleBack} className={classes.button}>
            Back to Shipping
          </Button>
          <Button variant="contained" color="primary" onClick={createOrder} className={classes.button}>
            Finalize Order
          </Button>
        </div>
      :
      null
      }
      </div>

      <div className="info">
      { activeStep === 3 ?
        <div>
        </div>
      :
      null
      }
      </div>



    </>
  )
}
export default Cart