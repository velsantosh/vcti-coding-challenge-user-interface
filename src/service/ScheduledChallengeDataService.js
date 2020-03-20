import axios from 'axios'
//const INSTRUCTOR = 'in28minutes'
var apiBaseUrl = "http://192.168.1.103:8083";

class ScheduledChallengeDataService {

    getScheduledQuestionByUserId(userId){
        return axios.get(`${apiBaseUrl}/schQuesByUid/${userId}`,
         {headers: {
             'Content-Type':'application/json','Access-Control-Allow-Origin': '*'
            },
        crossdomain: true
        }
        );
    }
    
   
}

export default new ScheduledChallengeDataService()