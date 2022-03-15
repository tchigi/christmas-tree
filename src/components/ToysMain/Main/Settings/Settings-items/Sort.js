import './Sort.scss'
import {target} from "nouislider";

export const Sort = ({ sortBy }) => {
    return (
        <div className={"sort-container"}>
            <div className={"sort-text settings__page__text"}>Сортировать</div>
            <select className={"sort-select second__settings__page__text"} value={ sortBy[0] } onChange={(e) => {sortBy[1](e.target.value)}}>
                <option value="1">От "А" до "Я"</option>
                <option value="2">От "Я" до "А"</option>
                <option value="3">По году приобритения по возрастанию</option>
                <option value="4">По году приобретения по убыванию</option>
            </select>
            <div className={"arrow-down-sort-container"}></div>
        </div>
    )
}
