import { useState } from 'react';
import '../styles/App.scss';

function App() {
  let [numberOfErrors, setNumberOfErrors] = useState(0);
  const [word, setWord] = useState("katakroker");
  const[userLetters, setUserLetters] = useState ([]);



  const handleClick = (event) => {
    setNumberOfErrors(numberOfErrors + 1);
    console.log(numberOfErrors);
  };

  const [lastLetter, setLastLetter] = useState('');
  const handleChange = (event) => {
    setLastLetter(event.target.value);
    console.log(lastLetter);
    const inputLetter = event.target.value;
    const validLetterRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/;
    if (validLetterRegex.test(inputLetter)) {
      setLastLetter(inputLetter);
    } else {
      console.log(`La letra "${inputLetter}" no es válida.`);
    }
    //   if (event.which == 13 || event.keyCode == 13) {

    // }
  };
  const handleSumbitForm = (event) => {
    event.preventDefault();
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const isLetterInUserLetters= userLetters.includes(letter);
      return( 
      <li className="letter" key={index}>
        {isLetterInUserLetters ? letter : ''}
        </li>
      );
    });
  };
  const renderErrorLetters = () => {

    
  };




  return (
    <>
      <div className='page'>
        <header>
          <h1 className='header__title'>Juego del ahorcado</h1>
        </header>
        <main className='main'>
          <section>
            <div className='solution'>
              <h2 className='title'>Solución:</h2>
              <button onClick={handleClick}>Incrementar</button>
              <ul className='letters'>
              {renderSolutionLetters()}
              </ul>
            </div>
            <div className='error'>
              <h2 className='title'>Letras falladas:</h2>
              <ul className='letters'>
              {renderErrorLetters()}
                
              </ul>
            </div>
            <form onSubmit={handleSumbitForm}>
              <label className='title' htmlFor='last-letter'>
                Escribe una letra:
              </label>
              <input
                autoComplete='off'
                className='form__input'
                maxLength='1'
                type='text'
                name='last-letter'
                id='last-letter'
                onChange={handleChange}
              />
            </form>
          </section>
          <section className={'dummy error-' + numberOfErrors}>
            <span className='error-13 eye'></span>
            <span className='error-12 eye'></span>
            <span className='error-11 line'></span>
            <span className='error-10 line'></span>
            <span className='error-9 line'></span>
            <span className='error-8 line'></span>
            <span className='error-7 line'></span>
            <span className='error-6 head'></span>
            <span className='error-5 line'></span>
            <span className='error-4 line'></span>
            <span className='error-3 line'></span>
            <span className='error-2 line'></span>
            <span className='error-1 line'></span>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
