export default function Cart( {data}){
    return(
        <>
            <h1>Country List</h1>
            <div className="cards">
                {data.map((item, i) => 
                    <div className="card" key={i}>
                        <div className="card-title">{item.name.common}</div>
                        <div><b>Population : </b> {item.population}</div>
                        <div><b>Region : </b> {item.region}</div>
                        <div><b>Capital : </b> {item.capital}</div>
                        <div><b>Flag : </b> {item.flag}</div>
                    </div>
                )}
            </div>
        </>
    )
}