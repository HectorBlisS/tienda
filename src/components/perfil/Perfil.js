import React, { Component } from 'react';
import User from './User.js';
import PerfilPersonal from './PerfilPersonal.js';
import TabsMenu from './TabsMenu.js';
import Footer from '../footer/Footer.js';



class Perfil extends React.Component {

  render() {
    return (

      <div>


<Nav/>

      <div >


          <User/>



<div  className="perfil-completo" style={{background: '#ECECEC'}}>
      <PerfilPersonal/>


      <TabsMenu/>


</div>

<Footer/>

      </div>

    );
  }
}

export default Perfil;
