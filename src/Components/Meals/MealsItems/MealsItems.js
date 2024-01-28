import classes from './MealsItem.module.css'
import MealItemForm from './MealItemForms'
const MealsItems = props =>{
    const price = `$${props.price.toFixed(2)}`

    return (
        <li className={classes.meals}>
            <div>
                <h3 className={classes.name}>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealsItems;