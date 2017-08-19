export default `
  ul {
    position: relative;
    color: white;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-content: center;
    vertical-align: middle;
    padding: 5px 17px;
  }

  ul li {
    position: relative;
    padding-top: 10px;
    font-size: 10.5pt;
  }

  ul li:nth-child(2):before, ul li:nth-child(2):after {
    position: absolute;
    content: '';
    height: 2px;
    width: 36px;
    background: white;
    left: calc(50% - 18px);
  }

  ul li:nth-child(2):before {
    top: 0;
  }

  ul li:nth-child(2):after {
    bottom: -10px;
  }

  ul:before, ul:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 2px;
    background: white;
  }

  ul:before {
    left: 0px;
  }

  ul:after {
    right: 0px;
  }

  ul li:nth-child(1):hover {
    color: cyan;
  }

  ul li:nth-child(2):hover {
    color: magenta;
  }

  ul li:nth-child(3):hover {
    color: yellow;
  }
`
