import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'

export function App() {
  console.log('App rendered')
  return (
    <>
      <h1>Título doidão</h1>
      <div>
        <h2>Subtítulo maluco</h2>
        <Heading />
        <Heading>Subtítulo doidão</Heading>
        <Heading>Subtítulo doidão 2</Heading>
        <Heading>Subtítulo doidão 3</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </>
  )
}
