import { FC, useEffect } from 'react'

interface IProps {
  name?: string
}

export const ABHelloWorld: FC<IProps> = ({ name = 'qweqwe', children }) => {
  useEffect(() => {
    class HelloWorld extends HTMLElement {
      constructor() {
        super()
        // создадим Shadow DOM
        this.attachShadow({ mode: 'open' })
      }

      connectedCallback() {
        const name = this.getAttribute('name')
        // Отрендерим наш контент внутрь Shadow DOM
        this.shadowRoot.innerHTML = `Hello, <strong>${name}</strong> :)`
      }
    }

    if (!customElements.get('hello-world')) {
      /* Зарегистрируем компонент, если его еще нет */
      customElements.define('hello-world', HelloWorld)
    }
  }, [])

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <hello-world name={name} />
  )
}

export default ABHelloWorld
