export default `
.bar {
  position: absolute;
  height: 100px;
  width: 100%;
  left: 0;
  z-index: 5;
  background: black;
}

.bottom {
  bottom: 0;
}

.top {
  top: 0;
}

.content {
  height: calc(100vh - 100px);
}
`
