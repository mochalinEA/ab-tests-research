import { mockResponse } from './mockResponse'

type TVariant = 'a' | 'b'

export interface IExperiment {
  id: number
  variant: TVariant
}

let availableExperiments: IExperiment[] = []

export const getVariant = (experimentId: number): TVariant | undefined => {
  const experiment = availableExperiments.find(
    (experiment) => experiment.id === experimentId
  )

  if (experiment) {
    return experiment.variant
  }
}

export interface IResponse {
  experiments: IExperiment[]
}

export const setExperiments = (experiments: IExperiment[]): void => {
  availableExperiments = experiments
}

export const fetchExperiments = (): Promise<IExperiment[]> => {
  return Promise.resolve<IResponse>(mockResponse)
    .then((response) => response.experiments)
    .catch(() => {
      // не будет обрабатывать ошибку, просто если не взлетело - отдадим пустой массив
      return []
    })
}
