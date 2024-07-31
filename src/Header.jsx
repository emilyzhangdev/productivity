function Header( ) {
    const d = new Date();
    let text = d.toDateString();

    var category = 'happiness'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'YOUR_API_KEY'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    return (<header>
       <h1> {text} </h1> <br/>



    </header>)
}

export default Header