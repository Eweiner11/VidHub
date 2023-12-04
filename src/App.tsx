
import { useState } from 'react'
import './App.css'
import { useVideo } from './contexts/VideoListContext'

function App() {
  const {videos,setVideos} = useVideo()
  const [url,setUrl] = useState<any>('')

  return (
      <>
      <h4>
        Video List
      </h4>
      {videos.map((item:any)=>{
        return (
          <div>{item}</div>
        )
      })}
      <input onChange = {(e)=>setUrl(e.target.value)}></input>
      <button onClick = {()=>{setVideos([...videos,url])}}>submit</button>
      </>
  )
}

export default App
