import React, { Component } from 'react';
import axios from 'axios'
//const INSTRUCTOR = 'in28minutes'
var apiBaseUrl = "http://192.168.1.103:8083";

class ScheduledChallengeDataService {

    getScheduledQuestionByUserId(userId) {

        // return axios.get(`${apiBaseUrl}/schQuesByUid/${userId}`,
        return axios.get(`http://localhost:8083/schQuesByUid/test_user`,
            {
                headers: {
                    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
                },
                crossdomain: true
            }
        );
    }

    submitScheduledQuestionResultsByUserId(objQuesResultSet) {

        console.log("submitScheduledQuestionResultsByUserId submitted : ", objQuesResultSet);
        //return axios.post(`http://localhost:8083/addObjRes`, objQuesResultSet);
        return axios.post(`http://localhost:8083/addObjResList`, objQuesResultSet);
    }


    submitScheduledSubQuestionResultsByUserId(subQuesResultSet) {

        console.log("submitScheduledSubQuestionResultsByUserId submitted : ", subQuesResultSet);
        //return axios.post(`http://localhost:8083/addObjRes`, objQuesResultSet);
        return axios.post(`http://localhost:8083/addSubjRes`, subQuesResultSet);
    }

    runScheduledQuestionTestCases(validateProgramContent)  {

        console.log("runScheduledQuestionTestCases submitted : ", validateProgramContent);
        return axios.post(`http://localhost:8082/validateSubjQues`, validateProgramContent);
    }

}

export default new ScheduledChallengeDataService()