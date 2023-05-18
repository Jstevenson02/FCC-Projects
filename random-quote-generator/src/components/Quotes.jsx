import { useEffect, useState } from "react";
import "../App.css";
import randomColor from "randomcolor";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  var color = randomColor(); // a hex code for an attractive color

  useEffect(() => {
    getQuote();
  }, []);

  const handleClick = () => {
    randomColor();
    getQuote();
  };

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  console.log(color);

  return (
    <>
      <div className="container">
        <div style={{ backgroundColor: color }} className="quote-box">
          <div className="quote">{quote}</div>
          <div className="author">— {author}</div>
          <button onClick={handleClick} className="quote-btn">
            New Quote
          </button>
        </div>
      </div>
      <div className="creator">by jstevenson02</div>
    </>
  );
};

export default Quotes;