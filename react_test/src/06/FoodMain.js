import FoodCard from './FoodCard';
import fooddata from './fooddata.json';

export default function FoodMain() {
    console.log({ fooddata });

    const tags = fooddata.map(item => <fooddata
                                        />);

    return (
        <div>
            <FoodCard />
        </div>
    )
}
