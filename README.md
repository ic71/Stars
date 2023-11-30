# Stars
Stars Design with css, js

* [Video]( https://streamable.com/3jeech )


 * {
    width: 100%;
    height: 100vh;
    background: linear-gradient(#001f3f, #17202a);
    position: relative;
    overflow: hidden;
  }
  
  * {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #fff;
    box-shadow: 
      200px 200px #fff, 
      300px 100px #fff, 
      600px 300px #fff, 
      400px 400px #fff, 
      700px 100px #fff, 
      800px 200px #fff, 
      1000px 150px #fff, 
      1200px 350px #fff, 
      1300px 400px #fff, 
      1400px 450px #fff;
    z-index: 0;
    animation: moveStars 50s linear infinite; /* حركة النجوم */
  }
