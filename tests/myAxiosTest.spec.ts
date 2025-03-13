import { test } from '@playwright/test';
import axios, { AxiosResponse } from 'axios';
import * as fs from 'fs';

test.only('This is regression test @Regression', async () => {
    try {

        // Get current timestamp in milliseconds
        const timestamp = Date.now(); // Example: 1710242751234

        const filename = `full_response_${timestamp}.json`;

        // Make GET request
        const response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

        console.log("Response Data: ", response.data);

        // Extract only necessary properties to avoid circular references
        const responseObject = {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            config: {
                method: response.config.method,
                url: response.config.url,
                headers: response.config.headers
            },
            data: response.data
        };

        // Convert the extracted response object to a string
        const responseString = JSON.stringify(responseObject, null, 2);

        // Write to a file
        fs.writeFileSync(`ResponseData/${filename}`, responseString, 'utf-8');

        console.log('Response written to full_response.json successfully!');
    } catch (error) {
        console.error('Error fetching or writing response:', error);
    }
});