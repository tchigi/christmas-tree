import Nouislider from "nouislider-react";
import './nouislider.css'
export const RangeYear = ({ sortByRangeYear }) => {
    const [getFilterByRangeYear,setFilterByRangeYear] = sortByRangeYear
    const SliderYear = () => (
        <Nouislider range={{ min: 1940, max: 2020 }}
                    step={10}
                    start={[getFilterByRangeYear.min, getFilterByRangeYear.max]}
                    onChange={(def,handler,values) => {
                        setFilterByRangeYear({min: values[0], max: values[1],})
                    }}
                    connect className={'slider-year'}/>
    );

    return (
        <div className={"range-item-container range-year"}>
            <div className={"range-item-text settings__page__text"}>Год приобритения</div>
            <SliderYear/>
            <div className={"range-amount-text-container"}>
                <div className={"range-amount-text second__settings__page__text"}>1940</div>
                <div className={"range-amount-text second__settings__page__text"}>2020</div>
            </div>
        </div>
    )
}
