import http from 'k6/http';
import { check, sleep} from 'k6'; 

export const options = {
    vus: 6, //number of virtual users
    // duration: '10s', //duration of test - can't have "duration" AND "stages" at the same time
    //ramping up stages below
    stages: [
        {duration: '2s', target: 1 }, //Ramp up to 1 user1 over 2 seconds
        {duration: '5s', target: 2 }, //Ramp up to 2 users over 5 seconds
        {duration: '3s', target: 3 }, //Ramp up to all 6 users over 3 seconds
    ],
};

export default function () { 
    const res = http.get('https://gkdemo.free.beeceptor.com/api/user');
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1); // Adding a 1s pause between requests

    const postRes = http.post(
        'https://gkdemo.free.beeceptor.com/api/items', 
        JSON.stringify({ key: 'value', data: 123 }),
        { headers: { 'Content-Type': 'application/json' } }
      );
      check(postRes, { 'status was 201': (r) => r.status === 201 });
    }
