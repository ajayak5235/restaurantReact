import Card from '../UI/Cart'
import classes from './AvailableMeals.module.css'
import MealsItems from './MealsItems/MealsItems'

// const DUMMAY_MEALS = [
//     {
//         Id:'m1',
//         name:'Sushi',
//         Desription:'Finnest fish and vaggies',
//         price:25
//     },
//     {
//         Id:'m2',
//         name:'Veg',
//         Desription:'Veg Food',
//         price:20
//     },
//     {
//         Id:'m3',
//         name:'Burger',
//         Desription:'Finnest Burger',
//         price:10
//     },
//     {
//         Id:'m3',
//         name:'Pizza',
//         Desription:'vag pizza',
//         price:30
//     }
// ]



// const AvailableMeals = ()=>{
// const CartItems = DUMMAY_MEALS.map(meal => <MealsItems key={meal.Id} name={meal.name} Desription={meal.Desription} price={meal.price}/>)

// return (
// <section className={classes.meals}> 
// <Card>
// <ul>
//         {CartItems}
// </ul>
// </Card>
    
// </section>
// )
// }
// export default AvailableMeals;

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
