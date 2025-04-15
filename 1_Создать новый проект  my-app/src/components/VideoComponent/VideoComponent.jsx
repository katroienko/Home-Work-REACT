function VideoComponent() {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <video width="500" height="300" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Ваш браузер не поддерживает тег video. 
          </video>
          <a href="https://www.youtube.com/shorts/EWQlA0FZcFs">video cat</a>
          
        </div>
      </>
    );
  }
  
  export default VideoComponent;