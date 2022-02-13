import './App.css';
import data from './data';
import Header from './components/Header';
import Card from './components/Card';
function App() {
	const myTravels = data.map((cardData) => {
		return (
			<Card key={cardData.title} {...cardData}/>
		)
	})
	return (
		<div className='container'>
			<Header />
			<main className='main'>
				{myTravels}
			</main>
		</div>
		
	)
}

export default App;
