export default `



#glitch {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: -45;
  padding-right: 45px;
  background-image: url("/assets/Tv_Glitch_V1.png");
  background-position: center;
  background-size: cover;

}

.playButton {
  position: absolute;
  height: 120px;
  width: 120px;
  top: calc(50vh - 60px);
  left: calc(50vw - 60px);
  background-image: url('/assets/Icons/play.svg');
  background-position: center;
  background-size: cover;
  cursor: pointer;
  opacity: 0;
}

#pressToPlay {
  position: absolute;
  font-size: 15px;
  top: calc(50vh + 80px);
  text-align: center;
  width: 100%;
  color: white;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 4.5px;
}
`
