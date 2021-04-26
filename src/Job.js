const Job = (props) => {
    return (
        <div className={`job ${props.className}`}>
            <h1>{props.title}</h1>
            <footer className="jobFooter">
                {props.contractType} - {props.country} - {props.city}
            </footer>
        </div>
    );
};

export default Job;
