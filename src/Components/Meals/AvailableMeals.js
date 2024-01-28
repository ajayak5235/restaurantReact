import Card from '../UI/Cart'
import classes from './AvailableMeals.module.css'
import MealsItems from './MealsItems/MealsItems'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 25
    },
    {
        id: 'm2',
        name: 'Veg',
        description: 'Veg Food',
        price: 20
    },
    {
        id: 'm3',
        name: 'Burger',
        description: 'Finest Burger',
        price: 10
    },
    {
        id: 'm4',
        name: 'Pizza',
        description: 'Veg pizza',
        price: 30
    }
];

const AvailableMeals = () => {
    const cartItems = DUMMY_MEALS.map(meal => (
        <MealsItems key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {cartItems}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
