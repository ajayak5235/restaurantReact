
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcons" 

const HeadrCartButton = props =>{
return <button className={classes.button}>
    <span>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>3</span>
</button>

}

export default HeadrCartButton