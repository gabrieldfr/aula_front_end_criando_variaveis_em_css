import { } from 'react'
import "./App.scss"
function App() {

  return (
    <>
      <div className='container'>
        <section className='estrutura'>
          <article className='box'>
            <h1>Nossa Estrutura</h1>
            <img src="https://picsum.photos/350/200/?1" alt="Lorem ipsum image" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <a href='#'>Veja mais</a>
          </article>

          <article className='box'>
            <h1>Nossa Estrutura</h1>
            <img src="https://picsum.photos/350/200/?2" alt="Lorem ipsum image" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <a href='#'>Veja mais</a>
          </article>
        </section>
      </div>
    </>
  )
}

export default App
