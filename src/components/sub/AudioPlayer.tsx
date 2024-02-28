import DisplayTrack from "./DisplayTrack"
import Controls from "./Controls"
import ProgressBar from "./ProgressBar"

interface AudioPlayerProps {
  song: string
}

const AudioPlayer = (props: AudioPlayerProps) => {
  return (
    <div>
      <div>
        <DisplayTrack src={props.song}/>
        <ProgressBar />
        <Controls />
      </div>
    </div>
  )
}

export default AudioPlayer