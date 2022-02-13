import mapDot from '../icons/mapDot.svg'
export default function Card(props){
	return (
		<div className="main__card-body">
			<img src={`../img/${props.image}`} alt={`${props.image}`} className="main__card-img"/>		
			<div className="main__card-info">
				<div className="main__card-map">
					<img src={mapDot} className='main__card-point' />
					<h3 className="main__card-location">{props.location}</h3>
					<a href={props.googleMapsUrl} className="main__card-link">View on Google Maps</a>
				</div>
				<h2 className="main__card-title">{props.title}</h2>
				<h4 className="main__card-date">{props.startDate} - {props.endDate}</h4>
				<p className="main__card-descr">{props.description}</p>
			</div>
		</div>
	)
}