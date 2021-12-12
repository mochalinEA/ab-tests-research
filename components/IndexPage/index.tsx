import { FC } from 'react'
import { Wrapper } from '../Wrapper'
import { getVariant } from '../../ab-tests/utils'
import { Button } from '../Button'

import { ABHelloWorld } from '../../ab-tests/components/ABHelloWorld'

import dynamic from 'next/dynamic'
import { Tooltip } from '../Tooltip'

// импортирует отдельным чанком и только в случае использования
const ABButton = dynamic(() => import('../../ab-tests/components/ABButton'))

export const IndexPage: FC = () => {
  const buttonVariant = getVariant(12312)

  let ExperimentalButton = <Button>default button</Button>

  if (buttonVariant === 'a') {
    ExperimentalButton = <ABButton>a Button</ABButton>
  }

  if (buttonVariant === 'b') {
    ExperimentalButton = <Button>b Button</Button>
  }

  return (
    <Wrapper>
      <div>
        bla bla bla bla bla
        <br />
        bla bla
        <br />
        bla bla bla
      </div>

      <ABHelloWorld />

      <Tooltip text="My be click it?">{ExperimentalButton}</Tooltip>
    </Wrapper>
  )
}
