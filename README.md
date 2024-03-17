# WorkShop_2
**** 
WS2 Project - Stars 

> https://nech691.github.io/WorkShop_2/

## Tasks 

* Try using IDE running locally on your computer, rather than the p5.js web editor. 
  * VSCodium or VSCode
* Make a p5.js sketch using the setTimeout and setInterval functions
* Experiment with at least one new item from the p5.js documentation
* Create a GitHub login, make depositories for your three p5.js sketches (WS 0-2), and publish these as webpages using GitHub pages.
  * Include a README file in each repository with a link to the webpage
	* Use the README file to document your work clearly
* Post a link to your GItHub account to the course discussion board on CAnvas
	
## Notes 

* Ctrl + shift + p = open search bar
* Live preview = side preview of code art
  * Can stop server through search bar 
* Open previous projects from p5.js editor 
  * Open folder

* **Timeout**
  * setTimeout(function to be timed, milliseconds)
  * Times when functions or actions will occur 
		
* **MousePressed**
  * function mousePressed() {what to do}
  * Executes code when user clicks
	
* Creating a loop using a function
  
  > E.g.,
  >> Timeout of function A linked to mousePress; Funtion A linked back to an equal Timeout
  >> User clicks, timeout function A occurs, function A triggers another identical timeout
	
* **Intervals**
  * setInterval (what, time, x, y, size, color)

    > E.g.,
    >> setInterval (makeRedSquare, 500)
    >> function makeRedSquare(){
    >> noStroke();
    >> Fill(255, 0, 0);
    >> Rect(random(0, 300), random(0, 300), 60, 60);
    >> }

* setInterval can also be turned into a variable and stop at a certain point automatically 
  * Adding a variable = 0
  * Adding a variable = setInterval (makeShape function)
  * Make variable = 0 go up by 1 each time (++);
  * Conditional - if (variable = 0 > 5) {clearInterval(variable for setInterval);}

  > E.g.,
  >> let counter = 0
  >> Let countInterval = setInterval(makeRedSquare, 1000)
  >> Function makeRedSquare(){
  >> noStroke();
  >> Fill(255, 0, 0);
  >> Rect(random(0, 300), random(0, 300), 60, 60);
  >> Counter++;If (counter > 5){
  >> clearInterval(countInterval);}}
				
* You can also **re-start the intervals** by adding a mousePressed function:

  > mousePressed(){
  > setInterval(makeRedSquare, 1000)
  > }
		
* This makes it so that the loop starts, stops, and then, with a mouse click the action continues forever
* We can also set the intervals to be the same size using the mouse press\
* By adding "counter = 0" to the make shape function and by swapping the mousePressed function from setInterval to resetting interval variable 
			
* **Git & GitHub**
		
  * Git 
    * A software used to manage/control different versions of a file and calibrate code through cloud and sophisticated features
    * It keeps track of your coding history
    * We will only use the basic features of Git in this course
			
  * GitHub
	  * An online platform that runs Git software
    * There are other ways to use Git, but we will focus on GitHub
    * By the end of the course you should have 15 public repositories, each named after one of the WS, all with added README files
    * Upload the files from VSCodium into your repositories
      * You can create messages to keep track of changes made to these files, or repositories
      * Use the README files to document your processes (MarkDown)
        * Edit -> Type things down
        * https://www.markdownguide.org/basic-syntax/
      * Reupload updated files and use the history button to see changes between file versions
        * You can also publish your projects as a webpage
        * Settings > pages > branches > none -> main > save
        * Copy URL into README file
      * You can also download repositories from GitHub
        * Click on repository > green code button > download file as zip

## Project 

* I created a night sky that slowly filled with stars for my third workshop project. I used VSCodium to make this sketch, as well as the *setInterval* function and newly created functions that I called back to later in the code. I also experimented with *alpha values* in the *fill()* function. Finally, I also explored the *mousePressed* function, so the more you click, the faster the sky fills with stars.
				

