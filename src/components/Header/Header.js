import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <h2>
                    <span>Daijobu</span>
                    &nbsp;
                    College of Engineering
                    <small>(Affiliated to Weeb University, Shiganshina)</small>
                </h2>

            </header>
            <h2
                style={{
                    color: '#222',
                    textAlign: 'center'
                }}
            >Application Form - {new Date().getFullYear()}</h2>
        </>
    )
}

export default Header
