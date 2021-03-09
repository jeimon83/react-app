import React, { useState } from "react"
import { useCartContext } from "../../context/CartContext.js"
import Button from '@material-ui/core/Button';
import { getFirestore } from '../../firebase'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
  return ['Cart Items', 'Shipping', 'Payment', 'Confirm Order']
}

const Cart = () => {
  const { list } = useCartContext()
  const { 
    addOneitem,
    removeOneitem,
    removeItem, 
    totalPrice,
    totalItems
   } = useCartContext()

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')

  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1) }
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1) }
  const handleReset = () => { setActiveStep(0) }

  const addOne = item => {
    if (item.stock == item.count) {
    }else{
      addOneitem(item)
    }
  }
  const removeOne = item => removeOneitem(item)
  const removeAll = item => removeItem(item)

  const total_price = () => totalPrice()
  const total_items = () => totalItems()

  const finishBuy = () => {
    let newDate = new Date()
    let newOrder = { 
      buyer: {
        //name: buyer_name,
        //email: email,
        //phone: phone
      },
      items: 
        [...list],
        date: newDate,
        total: total_price()
    }

    const fsDB = getFirestore()
    const orderCollection = fsDB.collection('orders')
    orderCollection.add(newOrder).then((value) => {
      console.log(value.id) 
    })
  }

  return (
    <>
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
        <form>
          <label>
            Name:
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Phone:
            <input type="text" name="Phone" onChange={(e) => setPhone(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      : 
      null 
      }
      { activeStep === 2 ?
        <form>
          <label>
            Name:
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Phone:
            <input type="text" name="Phone" onChange={(e) => setPhone(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      : 
      null 
      }
      <div className="info">
      {(total_items() > 0) ?
        <div>
          <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      :
      null
      }
      </div>
      <div>
        {activeStep === steps.length ?
          <div>
            <Typography className={classes.instructions}>
              All steps completed - finished!
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        :
        null
        }
      </div>
    </>
  )
}
export default Cart

//  <button onClick={() => finishBuy()}>Finish Buy</button>

// <div>
//<input type="text" placeholder="Name"  onChange={(e) => setName(e.target.value)} />
//<input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//<input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
//</div>

//const [name, setName] = useState('')
//const [email, setEmail] = useState('')
//const [phone, setPhone] = useState('')