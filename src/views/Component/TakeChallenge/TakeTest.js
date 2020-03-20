import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import EditorJava from '../EditorJava';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

class TakeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dropdownOpen: false,
          runtestClicked:false,
          radioSelected: 2,
          dropdownOpen: new Array(6).fill(false),
          activeTab: new Array(4).fill('1'),
          dropDownValue: 'Language',
          editorContent:` Class TakeTest{
            public static void main(String[] str){
              System.out.println("Start the take test");
            }}`,
            questionContent:`Write palindrome using user input
            example:
            1
           1 2
          1 2 3
          `          
        };
        this.toggle = this.toggle.bind(this);
        this.toggleItem = this.toggleItem.bind(this);
        this.changeValue = this.changeValue.bind(this);
      }

      lorem() {
        return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
      }
    
      toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
          activeTab: newArray,
        });
      }

      changeValue(e) {
        this.setState({dropDownValue: e.currentTarget.textContent})
      }

      toggleItem(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
          return (index === i ? !element : false);
        });
        this.setState({
          dropdownOpen: newArray,
        });
      }
    
      tabPane() {
        return (
          <>
            <TabPane tabId="1">
              {`1. ${this.lorem()}`}
            </TabPane>
            <TabPane tabId="2">
              {`2. ${this.lorem()}`}
            </TabPane>
            <TabPane tabId="3">
              {`3. ${this.lorem()}`}
            </TabPane>
          </>
        );
      }

      handleSubmit = (e) => {
        console.log("clicked on submit");
      }

      handleRunTest = (e) => {
        console.log("clicked on run test");
        this.setState({runtestClicked:true});
      }

    
    

      render() {
        let unitTestResult;
        if(this.state.runtestClicked){
            unitTestResult =   (
            <Row className="p-xl-2">
                <Col xs="12" sm="9" lg="12">                               
                <EditorJava content={this.state.editorContent} showGutter="true"></EditorJava>                                
                </Col>
            </Row>);
        }
          return (
                <div className="animated fadeIn">                    
                    <Row>
                        <Col xs="12" md="12" className="mb-4">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                    active={this.state.activeTab[0] === '1'}
                                    onClick={() => { this.toggle(0, '1'); }}
                                    >
                                    Challenge
                                    </NavLink>
                                </NavItem>                    
                            </Nav>
                            <TabContent activeTab={this.state.activeTab[0]}>
                            <pre>{this.state.questionContent}</pre> 
                            </TabContent>
                        </Col>
                    </Row>
              <Row className="p-xl-2">
                        <Col xs="12" sm="9" lg="12">
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify"></i><strong>Solution - Editor</strong>
                                    <div className="card-header-actions">
                                    <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                        this.toggleItem(0);
                        }}>
                                        <DropdownToggle caret>
                                        {this.state.dropDownValue}
                                        </DropdownToggle>
                                        <DropdownMenu>                                            
                                            <DropdownItem onClick={this.changeValue}>Java</DropdownItem>
                                        </DropdownMenu>
                                 </Dropdown>
                                    </div>
                                </CardHeader>
                                <CardBody>                               
                                    <EditorJava content={this.state.editorContent} showGutter="true"></EditorJava>  
                                </CardBody>  
                            </Card>                            
                        </Col>
                </Row>
                <Row>  
                    <Col col="6" sm="4" md="2" x1 className="card-header-actions mb-3 mb-xl-0">
                        <Button active block color="primary" aria-pressed="true" onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                    <Col col="6" sm="4" md="2" x1 className="card-header-actions mb-3 mb-xl-0">
                        <Button active block color="primary" aria-pressed="true" onClick={this.handleRunTest}>Run Test</Button>
                    </Col>
                </Row>
                {unitTestResult}
                </div>
        );
      }
}

export default TakeTest;