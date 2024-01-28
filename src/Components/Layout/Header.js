import  {Fragment} from 'react'
import classes from './Header.module.css'
import mealFrame from '../../assets/meals.jpg'
import HeadrCartButton from './HeaderCartButton'

const Header = props =>{

    return <Fragment>
        <header className={classes.header}>
         <h1>ReactMeals</h1>
         <HeadrCartButton />
        </header>
        <div className={classes['main-image']}> 
            <img src={mealFrame} alt="A table is full of delicius food"></img>
        </div>
    </Fragment>
}

export default Header;