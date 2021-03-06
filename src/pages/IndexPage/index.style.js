export default `

.host {
  position: absolute;
  top: 0;
  left: 0;
  background: #1c1618;
  height: 100%;
  width: 100%;
  color: white;
  z-index: 0;
}

.centered-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
}

.logo {
  position: relative;
  height: 120px;
}

.glitch {
  position: absolute;
  left: -45px;
  width: 100%;
  z-index: 10;
}

.main-title {
  font-size: 70px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-weight: 300;
}

.main-title span {
  display: inline-block;
  transform: rotate(-180deg);
  transition: transform 0.5s;
}

.main-title:hover span {
  transform: rotate(0deg);
  transition: transform 0.5s;
}

.nav {
  width: 305px;
  margin-left: calc(50% - 152.5px);
}

@media screen and (max-width: 640px) {
  .main-title {
    font-size: 40px;
  }
}


`
