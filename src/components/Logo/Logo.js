import React from 'react'
import {TimelineMax, TweenMax} from 'gsap'

export default class Logo extends React.Component {
  componentDidMount(){
    var pinkYellow = document.getElementById('pink-yellow')
    var blackBlue = document.getElementById('black-blue')
    var bluePink = document.getElementById('blue-pink')
    var smallYellow = document.getElementById('smallYellow')
    var smallPink = document.getElementById('smallPink')
    var smallBlue = document.getElementById('smallBlue')
    var yellow = document.getElementById('Yellow')
    var pink = document.getElementById('Pink')
    var blue = document.getElementById('Blue')
    var outline = document.getElementById('outline')

    TweenMax.to([blue, blackBlue], 0, {x: -39})
    TweenMax.to([pink, bluePink], 0, {x: -120})
    TweenMax.to([yellow, pinkYellow], 0, {x: -180})
    TweenMax.to(blackBlue, 0, {opacity: 0})
    TweenMax.to(bluePink, 0, {opacity: 0})
    TweenMax.to(pinkYellow, 0, {opacity: 0})
    TweenMax.to([smallPink, smallBlue, smallYellow], 0, {y: -20, x: 20})
    TweenMax.to(outline, 0, {fill: '#1C1618', opacity: 0})

    var triangles = [yellow, pink, blue]
    var colors = ['yellow', 'magenta', 'cyan']
    triangles.map((triangle, i) => {
      triangle.addEventListener('mouseenter', (e) => {
        TweenMax.to(triangle, 1, {stroke: colors[i], fillOpacity: 0, strokeWidth: 2})
      })

      triangle.addEventListener('mouseleave', (e) => {
        TweenMax.to(triangle, 1, {stroke: 'none', fillOpacity: 1, strokeWidth: 1})
      })

      return null
    })



  }

  appearAnimation(){

    var pinkYellow = document.getElementById('pink-yellow')
    var blackBlue = document.getElementById('black-blue')
    var bluePink = document.getElementById('blue-pink')
    var smallYellow = document.getElementById('smallYellow')
    var smallPink = document.getElementById('smallPink')
    var smallBlue = document.getElementById('smallBlue')
    var yellow = document.getElementById('Yellow')
    var pink = document.getElementById('Pink')
    var blue = document.getElementById('Blue')
    var outline = document.getElementById('outline')

    return new TimelineMax()
    .staggerTo([[blue, blackBlue], [pink, bluePink], [yellow, pinkYellow]], 2, {x: 0}, 0.05)
    .to([blackBlue, bluePink, pinkYellow], 1, {opacity: 1})
    .to([smallPink, smallBlue, smallYellow], 1, {x: 0, y: 0})
    .to(outline, 3, {fill: '#fff', opacity: 1}, '+=1')
  }



  render() {
    return (

      <div className='host'>
      <svg height='100%' viewBox='0 0 305 143'>
        <g id="logo" stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g fillRule='nonzero'>
            <path d='M170.084471,0.169477473 L212.937445,68.7254397 L243.215042,20.2866604 L304.3617,118.128684 L226.815998,118.128684 L199.071096,118.128684 L145.82951,118.128684 L113.362727,118.128684 L106.601402,118.128684 L76.6600001,118.128684 L61.5126055,142.35667 L51.5951599,126.495092 L41.6801364,142.35667 L31.7553295,126.485261 L21.840306,142.35667 L0.810139022,108.704537 L59.2669992,15.1770084 L89.0243226,62.788669 L108.633485,31.4091652 L129.594884,64.9508321 L162.098473,12.9608471 L170.084471,0.169477473 Z' id='outline' fill='#FFFFFF'></path>
            <path d='M51.5976295,108.705202 L71.4355127,108.705202 L61.5165948,124.575518 L51.5976295,108.705202 Z' id='smallYellow' fill='#FFFF00'></path>
            <path d='M11.9219106,108.705202 L31.7597463,108.705202 L21.8408284,124.575518 L11.9219106,108.705202 Z' id='smallBlue' fill='#00FFFF'></path>
            <path d='M31.7597463,108.705202 L51.5976295,108.705202 L41.6787116,124.575518 L31.7597463,108.705202 Z' id='smallPink' fill='#FF00FF'></path>
            <path d='M59.2625349,32.9598227 L89.0198584,80.5715308 L71.4354177,108.704157 L11.9208183,108.704157 L59.2625349,32.9598227 Z M89.0198584,80.5715308 L106.601829,108.704157 L71.4354177,108.704157 L89.0198584,80.5715308 Z' id='Black' fill='#1C1618'></path>
            <path d='M108.631443,49.1919795 L129.595311,82.7361634 L113.365624,108.704157 L106.601829,108.704157 L89.0198584,80.5715308 L108.631443,49.1919795 Z M89.0198584,80.5715308 L106.601829,108.704157 L71.4354177,108.704157 L89.0198584,80.5715308 Z M129.595311,82.7361634 L145.827468,108.704157 L113.365624,108.704157 L129.595311,82.7361634 Z' id='Blue' fill='#00FFFF'></path>
            <path d='M170.087368,17.9498697 L212.937872,86.508254 L199.066679,108.704157 L145.827468,108.704157 L129.595311,82.7361634 L170.087368,17.9498697 Z M129.595311,82.7361634 L145.827468,108.704157 L113.365624,108.704157 L129.595311,82.7361634 Z M212.937872,86.508254 L226.811534,108.704157 L199.066679,108.704157 L212.937872,86.508254 Z' id='Pink' fill='#FF00FF'></path>
            <path d='M226.811534,108.704204 L287.359367,108.704204 L243.213047,38.0719443 L212.937872,86.508254 L199.066679,108.704157 L226.811504,108.704157 Z' id='Yellow' fill='#FFFF00'></path>
            <path d='M129.595311,82.7361634 L145.827468,108.704157 L113.365624,108.704157 L129.595311,82.7361634 Z' id='blue-pink' fill='#BD42FF'></path>
            <path d='M89.0198584,80.5715308 L106.601829,108.704157 L71.4354177,108.704157 L89.0198584,80.5715308 Z' id='black-blue' fill='#07C2C3'></path>
            <path d='M212.937872,86.508254 L226.811534,108.704157 L199.066679,108.704157 L212.937872,86.508254 Z' id='pink-yellow' fill='#FFBD42'></path>
          </g>
        </g>


      </svg>
        <style>{`

          .host {
            position: relative;
            height: 100%;
          }

          svg {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        `}</style>
      </div>
    )
  }
}
