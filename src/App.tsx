import { Container } from './components/Container'
import { Logo } from './components/Logo'

import './styles/theme.css'
import './styles/global.css'
import { Menu } from './components/Menu'
import { Countdown } from './components/Countdown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { Pause, Play, Square } from 'lucide-react'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <form
          className='form'
          action='https://formspree.io/f/xayzqvov'
          method='POST'
        >
          <div className='formRow'>
            <DefaultInput
              id='task'
              type='text'
              labelText='Task'
              placeholder='Type your task here...'
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<Play />} action='play' />
            <DefaultButton icon={<Pause />} action='pause' />
            <DefaultButton icon={<Square />} action='stop' />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  )
}
