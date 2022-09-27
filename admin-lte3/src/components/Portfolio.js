import React from 'react'

export default function Portfolio() {
  return (
    <div className='content-wrapper'>
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{__html: "\n  body {\n    font: 15px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #171312 ;\n  }\n  p {font-size: 16px;}\n  .margin {margin-bottom: 45px;}\n  .bg-1 { \n    background-color: 	#FFD700; /* Green */\n    color: #171312 ;\n  }\n  .bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n  }\n  .bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n  }\n  .bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n  }\n  .container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n  .navbar {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 19px;\n    letter-spacing: 5px;\n  }\n  .navbar-nav  li a:hover {\n    color: #1abc9c !important;\n  }\n  " }} />
      <div className="container-fluid text-center bg-white">
  <h2>Portfolio</h2>
  <h4>CHIRATIWAN YODKORNBURI</h4>
  <div className="row text-center">
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.15752-9/300811456_3262741617328496_2419951816596243090_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFH7GX-HjGvFBAOFm67TMulOouaIlREiYg6i5oiVESJiLoKal1Go0nmONztb2YXS4WIB_IqIjswsl7l19IRdzTF&_nc_ohc=YP5V2Ob79zcAX8G58xw&_nc_ht=scontent.fbkk2-3.fna&oh=03_AVI3DFN4geB5clI4pWnWMIOEcFXG-fhvedJ4qw_wPNauFg&oe=6345FA3C" alt="Paris" height={380} />
        <p><strong>London Eye</strong></p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.15752-9/303246033_329858039302278_1641974293701511876_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEWKDkAAaw8h8nBLKfmXJ2gNzkXIr8JlrM3ORcivwmWs3LbipGPry2dturtSLklV1FcP6TQkKGPKcUZZjM3yc0W&_nc_ohc=vuATEpI-rHYAX8o4daz&_nc_ht=scontent.fbkk2-5.fna&oh=03_AVI1EtpIvWSnSStTNCh_ZdVp_ztYU-3RlWloIxnFKbKOeQ&oe=63445CAE" alt="New York" height={380} />
        <p><strong>Night Street</strong></p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.15752-9/301533343_8011106458960964_7468194459660316399_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFeZlIQ0bbbnvzdEmIoc22rgmooAiwm9E6CaigCLCb0TgX8RmqX6inWP5Y3uA_R5WkVDCi_csRHn1vBLi4chb1i&_nc_ohc=Jgr-UxE_r9sAX_jABmT&_nc_ht=scontent.fbkk2-6.fna&oh=03_AVKiJ6JLREGPpZGCNfSq96NBZTOvCmO4-83xZdZAHu9-DQ&oe=63452FDB" alt="San Francisco" height={380}/>
        <p><strong>University of Oxford</strong></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
