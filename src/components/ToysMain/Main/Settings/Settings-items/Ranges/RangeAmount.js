import Nouislider from "nouislider-react";
import './nouislider.css'
export const RangeAmount = ( { sortByRangeAmount } ) => {
    const [getFilterByRangeAmount,setFilterByRangeAmount] = sortByRangeAmount
    const SliderAmount = () => (
        <Nouislider range={{ min: 1, max: 12 }}
                    start={[getFilterByRangeAmount.min, getFilterByRangeAmount.max]}
                    step={1} connect className={'slider-amount'}
                    onChange={(def,handler,values) => {
                        setFilterByRangeAmount({
                            min: values[0],
                            max: values[1],
                        })
                    }}/>
    );

    return (
        <div className={"range-item-container range-amount"}>
            <div className={"range-item-text settings__page__text"}>Количество экземпляров</div>
            <SliderAmount/>
            <div className={"range-amount-text-container"}>
                <div className={"range-amount-text second__settings__page__text"}>1</div>
                <div className={"range-amount-text second__settings__page__text"}>12</div>
            </div>
        </div>
    )
}
