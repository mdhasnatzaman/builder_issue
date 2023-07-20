import Image from 'next/image'

const { exec } = require('child_process');

var status = "Status:";
var error = "Error:";
const runCommand = () => {
  // Execute a command using exec

  let name = 'testvercel2'
  //let command = 'builder create --key "bpk-873a595ddb604b3fad5c18c8b40c1f33" --name "'+name+'" --debug';
  let command = 'builder -h';

  exec(command, (error:any, stdout:any, stderr:any) => {
    if (error) {
      console.error(`Command execution error: ${error}`);
      status = error;
      return;
    }
    status = stdout;
    error = stderr;
    console.log(`Command output:\n${stdout}`);
    console.error(`Command error:\n${stderr}`);
  });
};

//runCommand();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        
          Get started by editing&nbsp;
          
          {/* <code>{status}</code>
          <code>{error}</code>  */}
        
        </p>
        
      </div>

      
    </main>
  )
}
