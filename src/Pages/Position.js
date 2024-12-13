import './Position.css';

export default function Position() {
    return (
        <div className="position-container">
            <div className="topicCon">
                <h2 className="posTopic">TOPIC : <span>COMPUTER ENGINEERING</span></h2>
                <div className="addOn">
                    <div className="sortBox">
                        <span>Sort by</span>
                        <select name="sort" id="sort">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <form action="#" className="searchBar">
                        <input type="text" placeholder="Search..." />
                    </form>
                </div>
            </div>
            <div className='tableData'>
                
            </div>
        </div>
    );
}
