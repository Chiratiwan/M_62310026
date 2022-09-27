import React from 'react'

export default function Home() {
  return (
    <div className='content-wrapper'>
  <style dangerouslySetInnerHTML={{__html: "\n  body {\n    font: 15px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #171312 ;\n  }\n  p {font-size: 16px;}\n  .margin {margin-bottom: 45px;}\n  .bg-1 { \n    background-color: 	#FFD700; /* Green */\n    color: #171312 ;\n  }\n  .bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n  }\n  .bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n  }\n  .bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n  }\n  .container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n  .navbar {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 19px;\n    letter-spacing: 5px;\n  }\n  .navbar-nav  li a:hover {\n    color: #1abc9c !important;\n  }\n  " }} />
  <div className="container-fluid bg-1 text-center">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
    <h3 className="margin">Who Am I?</h3>
    <img src="https://scontent.fbkk2-7.fna.fbcdn.net/v/t39.30808-6/281609995_1152022242044340_3135991809191192243_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHeIFt94K2eif4YCG8oPkAzTOLF8dPojONM4sXx0-iM48B-V5NoSi9rN5aMeboOPT2c9NCPt_JOKbdqV2uvhp4K&_nc_ohc=sO7GhPo_emgAX90Uu3V&tn=bDHEwBta5Cdq764P&_nc_zt=23&_nc_ht=scontent.fbkk2-7.fna&oh=00_AT-OCPG4gBU8OZUNsWUGz6kDtLf7twJNKw5vdx6Y5xv5kg&oe=6324867E" className="img-responsive img-circle margin" style={{display: 'inline'}} alt="Bird" width={350} height={350} />
    <h3>CHIRATIWAN YODKORNBURI</h3>
  </div>
</div>
  )
}