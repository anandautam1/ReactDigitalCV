import styled from 'styled-components';

// the bottom contains the css which changes the background to the png asset
// the height of the asset will change depending on the screen size
export default styled.div`
text-align: center;
z-index: 9;

@media screen and (min-width: 992px)
{
  .jumbotron, .container-fluid .jumbotron {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 30px;
    padding-left: 30px;

    h1{
      padding-top:10px;
      padding-bottom:10px;
    }

    p{
      padding-top:10px;
      padding-bottom:10px;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 991px)
{
  .jumbotron, .container-fluid .jumbotron {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 30px;
    padding-left: 30px;
  }

  h1{
    padding-top:2px;
    padding-bottom:2px;
  }

  p{
    padding-top:2px;
    padding-bottom:2px;
  }
}

`;

/*
@media screen and (min-width: 768px)
.container .jumbotron, .container-fluid .jumbotron {
    padding-right: 30px;
    padding-left: 30px;
}
*/
