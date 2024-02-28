import AudioPlayer from "../sub/AudioPlayer"
import beautiful from '../../assets/audio/src_data_a_beautiful_day.mp3'

const Home = () => {
  return (
    <div>
      <div>
        <AudioPlayer song={beautiful}/>
      </div>
    </div>
  )
}

export default Home