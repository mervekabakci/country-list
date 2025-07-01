export default function Cart( {data}){
    return(
        <>
            <div className="filterColumn">
                <label htmlFor="filterSelec"></label>
            </div>
            <h1>Country List</h1>
            <div className="cards">
                {data.map((item, i) => 
                    <div className="card" key={i}>
                        <div className="card-title">{item.name.common}</div>
                        <div><b>Population : </b> {item.population}</div>
                        <div><b>Region : </b> {item.region}</div>
                        <div><b>Capital : </b> {item.capital}</div>
                        <div className="flag"><b>Flag : </b> {item.flags.svg ? <img width="40" src={item.flags.svg} alt={item.flags.alt ? item.flags.alt : "" } /> : item.flag}</div>
                    </div>
                )}
            </div>
        </>
    )
}