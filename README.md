# webpage-dynamic_mon v1.0 Help File

# Description:
This javascipt program is designed to be used as a cron job that monitors a webpage and alerts the user when that page has been updated.  The input is a URL the user defines in the program, and the output is a printed message if the webpage has changed. This program uses the puppeteer module to fully render a webpage using a headless Chrome instance, so that webpages that load content dynamically (on visit) can be monitored.

# Why is this program needed?:
There are a number of instances for when a user may want to know when a webpage has been updated.  The user is waiting for an announcement, a price change, or to monitor their own website for unauthorized changes.  Rather than manually check the website this program can be used to automate the process.  This program was specifially designed to be used a cron job on an existing webserver using minimal python libraries.

# Disclaimer:
Please do not abuse this program by overarlly monitoring webpages.  Each monitor request does consume resources of the website owner.  Please be considerate.

# Prerequisites:
   Node.js is needed to execute the program.  The following provides basic directions
   on installing Node.js on your respective operating system.

   Windows users:
   1. Download and install Node.js from https://www.nodejs.org/download.
   2. From command prompt, install the puppeteer module with: npm install puppeteer

   MacOS users:
   1. Download and install Node.js from https://www.nodejs.org/download.
   2. From terminal, install the puppeteer module with: npm install puppeteer
		
   Linux users (Ubuntu specific):
   1. Install both Node.js and the package manager npm with:  sudo apt install nodejs npm
   2. From terminal, install the puppeteer module with: npm install puppeteer

# Execution instructions  
  Prior to running the program you will need to edit one field inside webpage_dynamic_mon.js changing it to the desired webpage to monitor.

    urlGrab = "https://www.example.com/page"
 
  Run webpage_dynamic_mon from a command prompt or terminal window with:
  
    node webpage_dynamic_mon.js
   
  If you would like the program to run on a schedule it can be added as a cron job as initially designed.

# Latest Updates
* v1.0.

# Planned Updates:
* None
