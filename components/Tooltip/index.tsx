import { FC } from 'react'

interface IProps {
  text: string
}

export const Tooltip: FC<IProps> = ({ children, text }) => {
  return (
    <div className="container">
      <div className="anchor">{children}</div>

      <div className="tooltip">{text}</div>
      <style jsx>{`
        .container {
          position: relative;
        }

        .tooltip {
          display: none;
        }

        .anchor {
          display: inline-block;
        }

        .anchor:hover + .tooltip {
          display: block;
          position: absolute;
          bottom: 100%;
          left: 0;
          margin-bottom: 2px;
          padding: 10px;
          background: white;
          border: 1px solid green;
          border-radius: 6px;
        }
      `}</style>
    </div>
  )
}
