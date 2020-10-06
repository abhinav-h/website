//const socket = io("/");
const videoGrid=document.getElementById('video-grid');
const myVideo = document.createElement("video");
myVideo.muted=true;
let myVideoStream;

//function to access camera and microphone
navigator.mediaDevices.getUserMedia({
  video:true,
  audio:true
}).then(stream =>{
  myVideoStream=stream;
  addVideoStream(myVideo, stream);
});
//socket.emit("join-room");
//funcion to add video to the stream
const addVideoStream=(video,stream)=>{
  video.srcObject=stream
  video.addEventListener("loadedmetadata",()=>{
    video.play()
  })
  videoGrid.append(video)
}
