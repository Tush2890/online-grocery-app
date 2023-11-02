import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAppDispatch } from "../../redux/store";
import style from './cartItem.module.css';
import { productAdded, productRemoved } from "../../redux/cart.slice";

type Props = {
    productName: string,
    productItemCount: number,
    classNames?: string
}

export const CartItem = ({ productName, productItemCount, classNames }: Props) => {
    const dispatch = useAppDispatch();
    return (
        <div className={`d-flex ${style.incDecBorder} ${classNames}`}>
            <Button btnClassnames={`btn btn-outline-success noBorder ${style.noBgOnHover}`}
                btnOnClick={() => dispatch(productRemoved({ name: productName }))}
            ><i className='fa-solid fa-minus'></i>
            </Button>
            <Input id='itemCount' type='text' classNames={`noBorder px-3 ${style.w3Rem} ${style.inputTxtColor}`}
                value={productItemCount} onchange={() => console.log('Item value changed')} />
            <Button btnClassnames={`btn btn-outline-success noBorder ${style.noBgOnHover}`}
                btnOnClick={() => {
                    dispatch(productAdded({ name: productName }));
                }}><i className='fa-solid fa-plus'></i>
            </Button>
        </div>
    )
}