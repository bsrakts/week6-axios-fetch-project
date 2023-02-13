import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return (
    <div className='container'>
      <h2>You waiting users list.</h2>
      <h1>Loading..</h1>

      <Player
        src='https://assets2.lottiefiles.com/packages/lf20_ht6o1bdu.json'
        className="player"
        loop
        autoplay
      />

    </div>
  )
}

export default Loading;