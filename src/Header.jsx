function Header( ) {
    const d = new Date();
    let text = d.toDateString();

    return (<header>
       <h1> {text} </h1> <br/>



    </header>)
}

export default Header