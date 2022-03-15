import "./Home.scss"
export const Home = ({ currentPage }) => {
    const [getCurrentPage,setCurrentPage] = currentPage
    return (
        <main className="main home-main">
            <div className="main-title">
                <div className="title-text">Помогите бабушке нарядить елку</div>
            </div>
            <button className="main-button" onClick={()=>(setCurrentPage('Toys'))}>Начать</button>
            <div className={`${currentPage[0] === 'Home' ? 'main-page-toy1' : ''}`}></div>
            <div className={`${currentPage[0] === 'Home' ? 'main-page-toy2' : ''}`}></div>
        </main>
    )
}
