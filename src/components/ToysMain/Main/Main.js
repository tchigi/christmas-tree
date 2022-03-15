import './Main.scss'
import {Settings} from "./Settings/Settings";
import {Toys} from "./Toys/Toys";
import data from "../../../data";
import {useState} from "react";
import {Home} from "../../HomeMain/Home";
import {TreeMain} from "../../TreeMain/TreeMain";

export const Main = ({ currentPage }) => {
    const [getCurrentPage,setCurrentPage] = currentPage
    const [sortBy, setSortBy] = useState('1')
    const search = useState('')
    const filterByShape = useState([])
    const filterBySize = useState([])
    const filterByColor = useState([])
    const filterByFavorite = useState([])
    const sortByRangeAmount = useState({min: 1,max: 12})
    const sortByRangeYear = useState({min: 1940,max: 2020})
    const favoriteToys = useState([])
    const sortedData = data.sort((a,b) => {
        if (sortBy === '1') {
           if (a.name > b.name) return 1
           if (a.name < b.name) return -1
            return 0
        } else if (sortBy === '2') {
            if (a.name < b.name) return 1
            if (a.name > b.name) return -1
            return 0
        } else if (sortBy === '3') {
            if (a.year > b.year) return 1
            if (a.year < b.year) return -1
            return 0
        } else {
            if (a.year < b.year) return 1
            if (a.year > b.year) return -1
            return 0
        }
    }).filter((item) => {
        return item.name.toLowerCase().includes(search[0].toLowerCase())
    }).filter((item) => {
        const transformer = {
            'большой': 'big',
            'средний': 'medium',
            'малый': 'small',
        }

        if (filterBySize[0].length < 1) {
            return true
        }
        return filterBySize[0].includes(transformer[item.size])
    }).filter((item) => {
        const transformerShape = {
            'шар': 'ball',
            'фигурка': 'figure',
            'колокольчик': 'bell',
            'шишка': 'cone',
            'снежинка': 'snow',
        }
        if (filterByShape[0].length < 1) {
            return true
        }
        return filterByShape[0].includes(transformerShape[item.shape])
    }).filter((item) => {
        const transformerColor = {
            'белый': 'white',
            'желтый': 'yellow',
            'красный': 'red',
            'синий': 'blue',
            'зелёный': 'green',
        }
        if (filterByColor[0].length < 1) {
            return true
        }
        return filterByColor[0].includes(transformerColor[item.color])
    }).filter((item) => {
        const transformerFavorite = {
            true: 'Да',
            false: 'Нет',
        }
        if (filterByFavorite[0].length < 1) {
            return true
        }
        return filterByFavorite[0].includes(transformerFavorite[item.favorite])
    }).filter((item) => (
        item.count >= sortByRangeAmount[0].min && item.count <= sortByRangeAmount[0].max)).filter((item) => (
        item.year >= sortByRangeYear[0].min && item.year <= sortByRangeYear[0].max))

    if (getCurrentPage === 'Home') {
        return (
            <Home currentPage={currentPage}/>
        )
    }
    if (getCurrentPage === 'Toys') {
        return (
            <>
                <main className="main">
                    <Settings sortBy={[sortBy,setSortBy]} search={search} filterBySize={filterBySize} filterByShape={filterByShape}
                              filterByColor={filterByColor} filterByFavorite={filterByFavorite}
                              sortByRangeAmount={sortByRangeAmount} sortByRangeYear={sortByRangeYear}/>
                    <Toys data={sortedData} favoriteToys={favoriteToys}/>
                </main>
            </>
        )
    }
    if (getCurrentPage === 'Tree') {
        return (
            <TreeMain currentPage={currentPage} favoriteToys={favoriteToys} data={data}/>
        )
    }

}
