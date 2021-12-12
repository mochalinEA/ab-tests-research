import {
  fetchExperiments,
  IExperiment,
  setExperiments,
} from '../ab-tests/utils'
import { FC } from 'react'
import { IndexPage } from '../components/IndexPage'

interface IProps {
  experiments: IExperiment[]
}

export const Home: FC<IProps> = ({ experiments }) => {
  setExperiments(experiments)

  return <IndexPage />
}

export default Home

export const getServerSideProps = async (): Promise<Record<string, any>> => {
  const experiments = await fetchExperiments() // параллельно с получением основных данных

  return { props: { experiments } }
}
