import  './Range.scss'
import {RangeAmount} from "./Ranges/RangeAmount";
import {RangeYear} from "./Ranges/RangeYear";

export const Range = ( { sortByRangeAmount,sortByRangeYear } ) => {
    return (
        <div className="range-container">
            <RangeAmount sortByRangeAmount={sortByRangeAmount}/>
            <RangeYear sortByRangeYear={sortByRangeYear}/>
        </div>
    )
}
