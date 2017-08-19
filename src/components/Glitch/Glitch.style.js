export default `

.host {
  position: fixed;
  top: 0;
  left: -45px;
  height: 100vh;
  background: #1c1618;
  z-index: 10;
}

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
  margin-left: 45px;
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
  margin-left: 45px;

  text-align: center;
  width: 100%;
  color: white;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 4.5px;
}
`
