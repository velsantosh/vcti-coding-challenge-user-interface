import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';

import {
    AppAside,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppBreadcrumb2 as AppBreadcrumb,
    AppSidebarNav2 as AppSidebarNav,
  } from '@coreui/react';
  // sidebar nav config
  import navigation from './_nav';


class NavConfig extends Component {
   
    constructor(props) {
        super(props); 
        console.log('navconfig constructor');   
        console.log(this.props);
        this.permission = this.props.permission;     
        this.state = {config:{
          items:null
        }};
      }

  render() {
    console.log("props passed");
      console.log(this.props);
      console.log(this.state);
      const permissions = this.props.permission.map( per =>{
        console.log("permission");
        console.log(per);
        return per.name;
      }
      );
      console.log("permissions");
      console.log(permissions);
     this.state.config.items =  this.props.config.items.filter((item) => {
      console.log("inside loop");    
      console.log(item);   
          //console.log(this.props.permission);
          if(item.name === 'Buttons') return true; 
          if(item.name === 'Base') return true;
          if(item.name === 'Take Challenge') return true;
          if(item.name === 'Objective Question Wizard') return true;
          //return false;              
            return permissions.includes(item.name);
      });

      console.log(this.state.config);
    return (
        <AppSidebarNav navConfig={this.state.config} {...this.props} router={router}/>
    );
  }
}

export default NavConfig;
