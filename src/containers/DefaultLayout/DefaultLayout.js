import React, { Suspense, Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import axios from 'axios';

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
import navigation from '../../_nav';
import NavConfig from '../../NavConfig';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props) {
    super(props); 
    console.log('navconfig constructor');   
    console.log(this.props);
    this.state = {
      permission : ['Dashboardd'],
      isLoaded:true,
      isLoggedIn:true,
      items:{...navigation}
    };     
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  login(){

  }

  

  componentDidUpdate(){
    console.log("componentDidUpdate");
    
  }

  //let permission = ['Dashboard'];

  //this.permission = ["Dashboard"];



  render() {
    console.log("Navigation items");

   console.log(this.state.items);    
   let redirectdom;
   let permission;
   console.log('default layout');
   console.log(this.props);
   if(this.props.location.state && this.props.location.state.isPermission === 'yes'){
     console.log("dashboard redirect");
     console.log(this.props);
     permission = this.props.location.state.permission;
      redirectdom = (
        <Redirect to={{
          pathname: "/dashboard",          
          state: { isPermission: 'yes',
             permission:permission }
        }}/>        
      );
     
   }
   else{
    console.log("login redirect");
    console.log(this.props);
     permission=['dashboard'];
    redirectdom = (
    <Redirect from="/" to="/login" />
    );
   }
      let post = <p style={{ textAlign: 'center' }}>Loading Santosh...!</p>;
      if(this.state.isLoaded){
        post = (
          <div className="app">
          <AppHeader fixed>
            <Suspense  fallback={this.loading()}>
              <DefaultHeader onLogout={e=>this.signOut(e)}/>
            </Suspense>
          </AppHeader>
          <div className="app-body">
            <AppSidebar fixed display="lg">
              <AppSidebarHeader />
              <AppSidebarForm />
              <Suspense>
              <NavConfig permission= {permission} config= {this.state.items} {...this.props} router={router}/>
              </Suspense>
              <AppSidebarFooter />
              <AppSidebarMinimizer />
            </AppSidebar>
            <main className="main">
              <AppBreadcrumb appRoutes={routes} router={router}/>
              <Container fluid>
                <Suspense fallback={this.loading()}>
                  <Switch>
                    {routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      ) : (null);
                    })}
                    {redirectdom}
                  </Switch>
                </Suspense>
              </Container>
            </main>
            <AppAside fixed>
              <Suspense fallback={this.loading()}>
                <DefaultAside />
              </Suspense>
            </AppAside>
          </div>
          <AppFooter>
            <Suspense fallback={this.loading()}>
              <DefaultFooter />
            </Suspense>
          </AppFooter>
        </div>
        );
      }
     return post;    
  }
}

export default DefaultLayout;
