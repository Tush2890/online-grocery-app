import style from './restaurant.module.css';

type Props = {
    category: string,
    name: string,
    rating: number,
    isOpen: boolean,
    arrayBuffer: [],
    onRestaurantClick: () => void
}

export const MyRestaurant = ({ category, name, rating, isOpen, onRestaurantClick, arrayBuffer }: Props) => {
    const base64String = btoa(new Uint8Array(arrayBuffer).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
    }, ''));
    return (
        <div
            className={`col-lg-4 col-md-6 col-sm-12 cursor-pointer rounded 
            ${isOpen ? style.restaurantStatusActive : style.restaurantStatusInactive}`}
            onClick={onRestaurantClick}>
            <div className='card p-3 cardWithoutBorder'>
                <img
                    className="card-img-top"
                    src={`data:image/png;base64,${base64String}`}
                    alt="Product Card"
                    width={200} height={200} />
                <div className="mt-2 row">
                    <div className='flex-column col-lg-9 text-start'>
                        <h5 className="text-start">{name}</h5>
                        <span className="text-start">{category}</span>
                    </div>
                    <div className='d-flex flex-column col-lg-3 align-items-end'>
                        <span className={`${style.ratingBadge} p-1`}>{rating}&#9733;</span>
                        <span><b>22 min</b></span>
                    </div>
                </div>
            </div>
        </div >
    )
}