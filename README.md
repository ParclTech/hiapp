# hiapp
hiapp 

A. Installing Prerequisites

1. Download and install the latest [Node.js][1] from its web site. 
2. Download and install the latest [Git][2] from its web site. 
3. Open your favorite console application (Terminal, Command Prompt etc.), run the following command and wait for it to finish: 
    
        npm install -g bower

4. Run the following command and wait for it to finish: 
    
        npm install -g gulp

Now you are ready to install the Fuse. 

B. Installing Fuse

1. Clone this repo to your local machine, Open your favorite console application (Terminal, Command Prompt etc.), and navigate to where you cloned
        
2.   run the following command and wait for it to finish: 
    
        npm install

This command will install all the required Node.js modules into the **node_modules** directory inside your work folder. 

**Note:** Installing Node.js packages may throw a lot of warnings and errors along the way. As long as the process finishes without any error notes such as "Killed", you will be fine. 

5. Run the following command and wait it for to finish: 
    
        bower install

This command will install all the required bower packages into the **bower_components** directory inside your work folder. 

And now, you are ready to run the Fuse for the first time.

C. Running Fuse

1. While still in your work folder, run the following command in the console application: 
    
        gulp serve

And that's it. Gulp will take care everything and start the Fuse. Your default browser will be opened automatically, and you will be able to navigate through the template. 

For more information about gulp commands, check the [Working with Fuse][3] section. 

[1]: https://nodejs.org/en/
[2]: https://git-scm.com/
[3]: http://withinpixels.com/themes/fuse/documentation/working-with-fuse/server

  
