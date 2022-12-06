import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function YoutubeComponent(props){
  return(
    <div className='container'>

      <img src={props.thumbnailImg} />

      <div className='content'>
        <p>{props.videoTitle}</p>
        <p>{props.videoUploader}</p>
        <p>{props.dateVideoUploaded}</p>
        <p>{props.videoViews}</p>
      </div>

    </div>
  )
}


function App() {
  
  let sampleData = [
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "He did WHAT?!?! (My intial reaction)",
      videoUploader: "MaxTongster",
      dateVideoUploaded: "10-31-2022",
      videoViews: 10
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
      videoUploader: "Dave Doughbrick",
      dateVideoUploaded: "11-02-2022",
      videoViews: 300000
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "React in 100 seconds",
      videoUploader: "Fireship",
      dateVideoUploaded: "2022-09-08",
      videoViews: 255
    }
  ];

  return (
    <div className="app-container">

      {sampleData.map((e) => (
            <YoutubeComponent 
            thumbnailImg={e.thumbnailImg}
            videoTitle={e.videoTitle}
            videoUploader={e.videoUploader}
            dateVideoUploaded={e.dateVideoUploaded}
            videoViews={e.videoViews}
            />
          ))}
          
    </div>

  )
}

export default App


//  <div className='app-container'>
  //   <YoutubeComponent 
  //     thumbnailImg="https://via.placeholder.com/600x400"
  //     videoTitle="Why a cheesburger"
  //     uploader="JonJones123"
  //     videoUploaded="11/30/2022"
  //   />
  //    <YoutubeComponent 
  //     thumbnailImg="https://via.placeholder.com/600x400"
  //     videoTitle="Luis big break"
  //     uploader="Luis"
  //     videoUploaded="11/30/2022"
  //   />
  //    <YoutubeComponent 
  //     thumbnailImg="https://via.placeholder.com/600x400"
  //     videoTitle="How to make a taco"
  //     uploader="CookingFoods"
  //     videoUploaded="11/30/2022"
  //   />
  //  </div>