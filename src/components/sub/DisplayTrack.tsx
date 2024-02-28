interface DisplayTrackProps {
  src: string
}

const DisplayTrack = (props: DisplayTrackProps) => {
  return (
    <div>
      <audio src={props.src} controls />
    </div>
  )
}

export default DisplayTrack