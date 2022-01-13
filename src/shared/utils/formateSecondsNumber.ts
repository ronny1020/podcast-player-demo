function atLeastTwoDigits(number: number): string {
  return number < 10 ? `0${number}` : `${number}`
}

export default function formateSecondsNumber(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secondsLeft = seconds % 60

  return `${atLeastTwoDigits(hours)}:${atLeastTwoDigits(
    minutes
  )}:${atLeastTwoDigits(secondsLeft)}`
}
