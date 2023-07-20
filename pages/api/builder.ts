// pages/api/myapi.ts
import { NextApiRequest, NextApiResponse } from 'next';
const { spawn } = require('child_process');

const myApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // Your server-side logic here
  const data = { message: 'Hello from the server!' };
  
  // Return the response as JSON
    //res.status(200).json(data);
    // Usage example
    getChildProcessResponse('builder', ['-h']).then((response) => {
      console.log(response);
      res.status(200).json(response);
    }).catch((error) => {
      console.error(error);
      res.status(200).json(error);
    });
};

function getChildProcessResponse(command:any, args:any) {
  return new Promise((resolve, reject) => {
    const rootDirectory = process.cwd();
    const options = { cwd: rootDirectory };
  
    const childProcess = spawn(command, args,options);

    let responseData = '';

    // Capture the response data from the child process
    childProcess.stdout.on('data', (data:any) => {
      responseData += data.toString();
    });

    // Handle any errors that occur in the child process
    childProcess.on('error', (error:any) => {
      reject(error);
    });

    // Resolve the promise with the response data when the child process exits
    childProcess.on('exit', (code:any) => {
      if (code === 0) {
        resolve(responseData);
      } else {
        reject(new Error(`Child process exited with code ${code}`));
      }
    });
  });
}

export default myApiHandler;
