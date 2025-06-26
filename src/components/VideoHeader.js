import './VideoHeader.css';

const VideoHeader = () => (
  <div className="video-background-container">
    <video autoPlay muted loop playsInline className="video-background">
      <source src="/videos/7821854-hd_1920_1080_30fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="overlay-content">
      <h1>Welcome to SecureLife</h1>
      <p>Your future is secure</p>
    </div>
  </div>
);

export default VideoHeader;
