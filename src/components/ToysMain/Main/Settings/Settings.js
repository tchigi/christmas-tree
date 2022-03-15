import './Settings.scss'
import {Utilities} from "./Settings-items/Utilities";
import {Sort} from "./Settings-items/Sort";
import {Categories} from "./Settings-items/Categories";
import {Shape} from "./Settings-items/Shape";
import {Range} from "./Settings-items/Range";
import {Color} from "./Settings-items/Color";
import {Size} from "./Settings-items/Size";
import {Favorite} from "./Settings-items/Favorite";
import {ResetBtn} from "./Settings-items/ResetBtn";

export const Settings = ({ sortBy,search,filterBySize,filterByShape,filterByColor,sortByRangeAmount,sortByRangeYear,filterByFavorite }) => {
    return (
        <div className={'settings-container'}>
            <Utilities search={search}/>
            <Sort sortBy={sortBy}/>
            <Categories/>
            <Shape filterByShape={filterByShape}/>
            <Range sortByRangeAmount={sortByRangeAmount} sortByRangeYear={sortByRangeYear}/>
            <Color filterByColor={filterByColor}/>
            <Size filterBySize={filterBySize}/>
            <Favorite filterByFavorite={filterByFavorite}/>
            <ResetBtn filterByFavorite={filterByFavorite} filterBySize={filterBySize} filterByColor={filterByColor}
                      sortByRangeAmount={sortByRangeAmount} filterByShape={filterByShape} sortBy={sortBy} search={search}
                      sortByRangeYear={sortByRangeYear}/>
        </div>
    )
}
