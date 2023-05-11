import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

interface ProgressCircleProps {
  value: number
}

export default function ProgressCircle({ value }: ProgressCircleProps) {
  return (
    <>
      <CircularProgress value={value} />
    </>
  )
}
