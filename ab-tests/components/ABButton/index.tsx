import { FC } from 'react'

export const ABButton: FC = ({ children }) => (
  <button className="button">
    {children}

    <style jsx>{`
      .button {
        background: #e3f3c2;
        border: 2px solid red;
        border-radius: 10px;
      }
    `}</style>
  </button>
)

export default ABButton
