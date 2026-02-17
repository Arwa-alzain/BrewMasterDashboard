function StateCard({title, value}){

    return(
        <div className="state-card">
            <h3 className="card-title">{title}</h3>
            <p className="card-value">{value}</p>
        </div>
    );
}

export default StateCard;