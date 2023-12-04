
import './App.css'
import MainLayout from './layout/MainLayout'
import VideoGrid from './components/VideoGrid'
import { useVideo } from './contexts/VideoListContext'
import VideoInput from './components/VideoInput'


function App() {
  return (
  <MainLayout
    sidebar={<TestButtons/>}
    main={<VideoGrid/>}
/>
 )}
export default App

const TestButtons = () =>{
  const {videos,setVideos} = useVideo()
  const {toggleFullScreen} = useVideo()

  const oneVid = ['https://www.youtube.com/watch?v=ny2UnN7Xa0k']
  const twoVid = ['https://www.youtube.com/watch?v=lV1OOlGwExM',
  'https://www.youtube.com/watch?v=lV1OOlGwExM'
]
const threeVid = ['https://www.youtube.com/watch?v=lV1OOlGwExM','https://www.youtube.com/watch?v=lV1OOlGwExM','https://www.youtube.com/watch?v=lV1OOlGwExM']
const fourVid = ['https://www.youtube.com/watch?v=ny2UnN7Xa0k','https://www.youtube.com/watch?v=ny2UnN7Xa0k','https://www.youtube.com/watch?v=lV1OOlGwExM','https://www.youtube.com/watch?v=lV1OOlGwExM']
  return(
    <>
    <button onClick = {()=>setVideos(oneVid)}>1</button>
    <button onClick = {()=>setVideos(twoVid)}>2</button>
    <button onClick = {()=>setVideos(threeVid)}>3</button>
    <button onClick = {()=>setVideos(fourVid)}>4</button>
    <button onClick = {()=>toggleFullScreen()}>Full Screen</button>
    <VideoInput/>
    {videos.map(video =>{
      return (<div>{video}</div>)
    })}

    </>
  )
}