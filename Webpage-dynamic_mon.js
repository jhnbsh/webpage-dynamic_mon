

//***************************************************//
//Required modules:

const puppeteer = require('puppeteer');

//***************************************************//
//Declare variables:

var urlGrab = 'https://finance.yahoo.com/quote/TSLA/';

//***************************************************//
//Function to remove unwanted content - used later:

var removeContent = function(txt) {
    var contentArray = 
        [
          "Keywords", "to", "remove", "from", "results"
        ];
			
	  var expStr = contentArray.join("|");
      //Remove any match from grabbed webpage.  Is case sensitive.
      return txt.toString().replace(new RegExp(expStr, 'g'), ' ').replace(/\s{2,}/g, ' ');
  };

//***************************************************//
//Main - Begin setup and configuration:

(async () => {
    //Create an instance of the chrome browser
    const browser = await puppeteer.launch({
	//Enable headless mode
    headless: true,
	//Ignore HTTP/HTTPS error
	ignoreHTTPErrors: true,
	ignoreHTTPSErrors: true
    });

    //Create a new page
    const page = await browser.newPage();

    //Configure the navigation timeout
    await page.goto(urlGrab, {
        waitUntil: 'load',
        //Adjust the max timeout in milliseconds
        timeout: 1000 * 45
    });

//***************************************************//
//Start grabbing content:
    
// Grab the content by specifying the full path in HTML tags.  Returns one entire element of content.
    const toGrab = await page.$eval("body > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > fin-streamer", el => el.textContent);

//***************************************************//
//Display grabbed content before cleaning it:
    
    //Display the full content.  Uncomment for troubleshooting.
    //console.log(toGrab)

//***************************************************//
//Clean content:
    
    //Remove specific strings.
    var cleanGrab = removeContent(toGrab);
    
    //Return entire array as a string.
    const doneArr = cleanGrab.toString();

//***************************************************//
//Compare received content with previously saved content.
    
    const fs = require('fs')

    //Read in the previously saved contenet
    const buffer = fs.readFileSync("stockOutput.txt");
    const fileRead = buffer.toString();

    if (doneArr == fileRead) {
        //Content has not changed.  Do nothing.
    }
    else {
        //Content has changed.
        console.log("Urgent!  The following website has changed: " + urlGrab)
        //Update the file.
        fs.writeFileSync('grabOutput.txt', doneArr)
    }
    //Close program.
    process.exit();

})();