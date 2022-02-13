import logo from '../icons/logo.svg'
export default function Header(){
	return(
		<header className='header'>
			<img src={logo} className='header__logo' />
			<h1 className='header__title'>my travel journal.</h1>
		</header>
	)
}