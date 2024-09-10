document.addEventListener('DOMContentLoaded',() =>{
    const quoteContainer = document.getElementById('quote-container');
    const quoteElement = document.getElementById('quote');
    const authorElement =document.getElementById('author');
    const button = document.getElementById('new-quote-btn');

    const getQuote = async () =>{
        try{
            const response = await fetch('https://api.quotable.io/random');
            if (!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            quoteElement.textContent = `"${data.content}"`;
            authorElement.textContent = `"${data.author}"`;
        } catch (error){
            quoteElement.textContent = 'Sorry, something went wrong.';
            authorElement.textContent = '';
        }
    };

    button.addEventListener('click', getQuote);

    getQuote();
});