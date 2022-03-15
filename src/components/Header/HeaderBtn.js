import './HeaderBtn.scss'
export const HeaderBtn = ({ value, currentPage }) => {
    const [getCurrentPage,setCurrentPage] = currentPage
    return (
        <li><button className={'nav-item'} onClick={()=>(setCurrentPage(value))}>{value}</button></li>
    )
}
