const DEMO_API_URL = 'https://gkdemo.free.beeceptor.com';

async function testGetEndpoint() {
    try {
        const response = await fetch(`${DEMO_API_URL}/api/user`);
        const data = await response.json();

        console.log('GET Respose:', data);
        console.log('Status Code:', response.status);

        if (response.status === 200) {
            console.log('GET test passed: status code is 200');
        }else{
            console.error('GET test failed: status code is not 200');
        }

        if (data && data.message === 'Hello from demo') { 
            console.log('GET Test passed: message is correct');
        } else {
            console.error('GET Test failed: wrong message'); 
        }
        }
        catch (error) {
            console.error('Error during GET request:', error); 

        }

    } 

    testGetEndpoint();

