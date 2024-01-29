
import classes from './Cart.module.css'
import Model from '../UI/Model'
const Cart = props =>{
const CartItems = <ul>{
[{id:'c1', name:'Sushi', amount:2,price:12.99}
].map((item) => <li>{item.name}</li>)}</ul>

return <Model onClose={props.onClose}>
    {CartItems}
    <div className={classes.total}> 
        <span>Total Amount</span>
        <span>35</span>
    </div>
    <div className={classes.actions}>
     <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
     <button className={classes.button}>Order</button>
    
    </div>
</Model>
}
export default Cart;

