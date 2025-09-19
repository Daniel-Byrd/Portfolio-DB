import './projects.css'
import "bootstrap/dist/css/bootstrap.css"
// import { useState } from 'react'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';

function PProjects() {

  return (
    <>
		<div className="container">
        	<p className="fs-1 fw-bold text-decoration-underline">Projects</p>
		</div>
		<br/>
		<div className="container bg-dark fs-4">
			<h1 className="fs-1">Overview</h1>
			<p>The following is an overview of all of the projects I have worked on during my career.  It will cover the goal of the project, the tools and process used to develop it into its final state, and some screenshots of what the project looked like.  These projects will cover a wide range of subjects, goals, and tools, so take some time and feel free to explore all the work I have done over the years.</p>
		</div>
		<br/>

		<div className="container fs-4">
			<div className="accordion" id="accordionProjects">
				
				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
						React/Web Design: New Portfolio Page
					</button>
					</h2>
					<div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>August 2025 - September 2025</p>
						<p>Technologies Used: React, HTML, CSS, TypeScript, Bootstrap, NPM, GitHub</p>
						<p>My portfolio is a project that I have iterated on multiple times over the years. Starting from a simple HTML and CSS site I made back in college, it got the job done, but it never really looked professional. I made a new version years later both as a means of keeping my skills sharp and to make it more visually appealing, going for a terminal-Esque visual style. Again, while this newer version got the job done, it also did appear very amateurish, and I knew that at some point, I would want to try my hand at re-making the site using more modern tools.</p>
						<p>That time would come when I finally took the time to learn how React functioned. Seeing how I could make my own components, then re-use them, only having to edit them from one central location was an interesting opportunity I had to take. After quickly making a test site to experiment with the basics, I went ahead and re-made the portfolio to what you see here.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Portfolio1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Portfolio2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Portfolio3.png" alt="Third slide" />
							</Carousel.Item>													
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Portfolio4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Workflow Process/Art: TrenchBroom Map Rendering Process
					</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>July 2025 - July 2025</p>
						<p>Technologies Used: TrenchBroom, Godot, Krita</p>
						<p>I like making maps and scenes.  Back in the day I would use a tool called MagicaVoxel to create my 3D scenes, but lately, I have been using an older tool called TrenchBroom.  While this other tool gives me much more control over what I can make, it doesn't have the image rendering capabilities that MagicaVoxel has.  This presented a problem, I needed a way to take the scenes I made in TrenchBroom, light them up as needed, and set a camera that I can use to take a screenshot of the scene.</p>
						<p>TrenchBroom on its own would not be capable of such a feat, but I am not limited to just using TrenchBroom.  Godot is a popular game engine that has seen a steady increase of its userbase using TrenchBroom.  This increase has led to tools being made to allow for the quick import and refinement of maps from TrenchBroom directly into Godot (Namely FuncGodot).  Using these two programs, I can get the output I want.</p>
						<p>The process after getting everything set up looks something like this:</p>
						<ul>
							<li>We create a new map within TrenchBroom, setting the game to be the Godot Project we use for the output</li>
							<li>The map file is saved within Godot, allowing the tool to access the map, which allows us to generate the map within Godot once we are ready to</li>
							<li>Texture files are also saved within Godot, and TrenchBroom is configured to access the textures from this folder, allowing for the seamless addition of new textures as needed</li>
							<li>Once the map is in a good enough state, we can then use a special node within Godot to render the map in the Godot Engine</li>
							<li>From here, we can add light nodes and configure the sky and sunlight nodes as needed</li>
							<li>We can also import custom props that could not be made within TrenchBroom and place them into the scene at this point</li>
							<li>Once the scene has been fully set up, we then use a camera node with a script that allows us to take a screenshot of the camera output, saving it to an image file I can access</li>
						</ul>
						<p>While this is a far more involved process compared to generating an image in MagicaVoxel, the results are far worth it.  You can see some examples of the workflow in the images below.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TrenchMap1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TrenchMap2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TrenchMap3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TrenchMap4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>		
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						AI Development: Find Luigi
					</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>March 2025 - Arpil 2025</p>
						<p>Technologies Used: Python, Jupyter Notebook, Numpy, Matplotlib, OpenCV, YOLO, Google Collab</p>
						<p>My first AI project. I wanted to see if I could train an AI to play the "Wanted" minigame from New Super Mario Bros DS. Specifically, I wanted to it find Luigi (Who was always the hardest to find for me).</p>
						<p>The project was split into two main phases: The image generation phase, and the AI development phase.</p>
						<p>In phase 1, I created a tool using matplotlib to create a pretty close replica of the gameboard from the "Wanted" minigame. Hiding the single wanted target amongst 99 other decoy targets. I found ways to randomize their position on the board and their layering, while also creating a system to avoid the wanted target from being completely enveloped by the decoys (Making it impossible to actually see them, which would be bad for the AI). This ended up with me having a program that could quickly generate as many images as I could ever want (Initial testing allowed me to make over 10,000 images, all of which were playable)</p>
						<p>In phase 2, I had to take the images generated by the program in phase 1, find a way to feed them to an AI, train the AI, and have it be able to spot the target in a completely new image. The very first attempt at this failed horribly (Mainly because I was trying to cram an object classification model into this when I really shouldn't have). Eventually, I discovered both OpenCV and YOLO, two libraries that allowed me to train an object detection model and use that model to scan through the images.</p>
						<p>The end result of this project is an AI that is able to find Luigi with very good level of accuracy. It's still not perfect, certain images trip it up enough to where it can't find anything, but for a first time, I'd say this project went very well.</p>
						<p>I'm eager to see what weird and strange things I could do with this new technology</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/FindLAI1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/FindLAI2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/FindLAI3.png" alt="Third slide" />
							</Carousel.Item>													
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/FindLAI4.png" alt="Fourth slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/FindLAI5.png" alt="Fith slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/FindLAI6.png" alt="Sixth slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/FindLAI7.png" alt="Seventh slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/FindLAI8.png" alt="Eighth slide" />
							</Carousel.Item>
						</Carousel>						
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
						PHP/Web Design: Terminal Storage
					</button>
					</h2>
					<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>January 2025 - January 2025</p>
						<p>Technologies Used: PHP, HTML, CSS, JavaScript</p>
						<p>A project inspired by Discord, where I can upload files to several sub-sections to access later (Essentially a fancy bookmark page)</p>
						<p>The goal here was to make it so the page did not need to be manually edited to add new content to it. To achieve this, I used PHP on a local server to allow access to several CSV files. These CSV files would then point to links or files stored within the site and properly display the correct information</p>
						<p>I also added a system where the CSV file can be changed automatically by uploading and deleting files straight from the site itself and the site is just a single page that reads the needed CSV file depending on which channel you select. The result is a very modular system that allows me to keep track of many links in a neat and organized way.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TStorage1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TStorage2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TStorage3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TStorage4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
						Data Analysis: PySpark Practice Project
					</button>
					</h2>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>July 2024 - August 2024</p>
						<p>Technologies Used: Python, Pandas, Numpy, PySpark</p>
						<p>The main goal of this project was to accomplish two main goals: Become familiar with PySpark and work with a dataset that I did not fully know or gather</p>
						<p>For the data, I retrieved it from data.gov, and you can view more information on the data itself on the following link: https://data.brla.gov/Government/Website-Analytics/n9u7-h9i7/about_data.</p>
						<p>This project never really went anywhere beyond an introduction to the PySpark system.  Though as for an introduction, it really showed me that I am more than capable of using this system since it behaves very similarly to Pandas.</p>
						<p>For now, enjoy these sample images showing the code made so far.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PySparkProject1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PySparkProject2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PySparkProject3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PySparkProject4.png" alt="Fourth slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PySparkProject5.png" alt="Fith slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PySparkProject6.png" alt="Sixth slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
						Data Analysis: Elden Ring Weapon Analysis
					</button>
					</h2>
					<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>June 2024 - July 2024</p>
						<p>Technologies Used: Python, Pandas, Numpy, Beautiful Soup, Power BI</p>
						<p>Another side project of mine. The goal this time was to list and compare the various weapons found within the game Elden Ring. Comparisons included their locations, upgrade material, base stats, base scaling, and more.</p>
						<p>For the data retrieval process I got most of the information from the Fextralife wiki of the game, and then web scrapped and cleaned the data using Python, Beautiful Soup, and Pandas, then combine all of the tables into one and export the results into one big CSV file</p>
						<p>Once the data was gathered, I then imported it into Power BI for the visuals and further cleaning/analysis.</p>
						<p>Within Power BI, I created 6 pages covering different aspects of these weapons, from damage types, to locations, to stat requirements, and generally anything that came to mind that I was curious about.</p>
						<p>While I have been unable to get the project uploaded to the Power BI cloud, you can still view the results of this project in either image form, PDF, or even download the .pbix file if you want to see the interactable parts of the project.</p>
						<a href="./public/files/EldenRingWeaponAnalysis.pdf" download>EldenRingWeaponAnalysis.pdf</a><br/>
						<a href="./public/files/EldenRingWeaponAnalysis.pbix" download>EldenRingWeaponAnalysis.pbix</a>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ERWA1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ERWA2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ERWA3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ERWA4.png" alt="Fourth slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ERWA5.png" alt="Fith slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ERWA6.png" alt="Sixth slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ERWA7.png" alt="Seventh slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ERWA8.png" alt="Eighth slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
						Data Analysis: TF2 Map Analysis
					</button>
					</h2>
					<div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>April 2024 - May 2024</p>
						<p>Technologies Used: Python, Pandas, Numpy, Beautiful Soup, Plotly/Dash, Excel, Looker Studio</p>
						<p>This was a project to help keep skills that I recently learned sharp and to apply them to something I had genuine curiosity about.</p>
						<p>To those who do not know, Team Fortress 2 (TF2), is a first person shooter created by Valve in 2007 and is host to a number of maps. A lot of these maps are actually made by members of the community, and is still updated (somewhat) to this day. I had a few questions I wanted to ask that seemed best to answer through data analysis and as such, begun working.</p>
						<p>First step of the project was data collection, I got majority of data from official TF2 wiki page, which has every map listed there. I also followed a process labeled by Youtuber Uncle Dane on how to get the rough playable space of all of these maps and created my own data set to work with.</p>
						<p>After gathering all of the data, I put it all into Python, and begun to create various charts and visualizations to show off my findings. At first I was creating the charts using matplotlib, but decided to move to Dash and Plotly as those would allow me to put my findings on a website and still retain intractability.</p>
						<p>You can access the completed project with fully interactable charts by using the following link:</p>
						<p><a href="https://tf2mapanalysis2023.onrender.com">https://tf2mapanalysis2023.onrender.com</a></p>
						<p>*Please note that due to the hosting system used, the page can take up to 2 minutes to initially load, please give it some time if the site gives you a blank page at first</p>
						<p>The plan for this project also involved making similar reports within both Excel and Looker Studio.</p>
						<p>You can view the excel file version, which also includes the data used for this project here:</p>
						<p><a href="./public/files/projects/TF2MapData.xlsx" download>TF2MapData.xlsx</a></p>
						<p>You can also view the Looker Studio report by going to the following link:</p>
						<p><a href="https://lookerstudio.google.com/s/jj9bsWPM66c">https://lookerstudio.google.com/s/jj9bsWPM66c</a></p>

						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TF2MapA1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TF2MapA2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TF2MapA3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TF2MapA4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
						Data Analysis: Bad Apple Word Cloud Animation
					</button>
					</h2>
					<div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>March 2024 - April 2024</p>
						<p>Technologies Used: Python, Numpy, Matplotlib, Wordcloud, Blender, Audacity</p>
						<p>This was an idea I had gotten while learning how to visualize data in Python. Using the Wordcloud library, you can use a black and white image (Or really just any image that is just a single color with a empty background) as a mask for the word cloud to fit inside of.</p>
						<p>The core idea of the project was to take every frame from the music video Bad Apple, which is already in black and white, and apply a word cloud to every frame. From here, I can stitch the frames back together and render it back into a proper video.</p>
						<p>The end result was 6,953 word cloud images being created, all of which were made by the program I created running a single time.</p>
						<p>You can view the end results of this project by looking at the attached Youtube link</p>
						<p><a href="https://www.youtube.com/watch?v=VGfdpqpR-RM">https://www.youtube.com/watch?v=VGfdpqpR-RM</a></p>						
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
						Pomeroy: UMB Work Notes Site
					</button>
					</h2>
					<div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>February 2020 - February 2020</p>
						<p>Technologies Used: HTML, CSS, JavaScript</p>
						<p>During my first weeks with Pomeroy, I had noticed that the main way the team had organized tickets was via text files that would be copy and pasted onto Service Now. Wanting a more efficient way of getting this information organized, I created a website that can allow the user to easily record the needed info, then copy it into a format that would be used for ticket/incident logs. The website also came with a few work note templates that can be used for some of the more common issues the users face. I would later add the storage site to this as well, a means of recording previous incident descriptions (but sadly not saving the work notes that were created).</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PWorkNotes1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PWorkNotes2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PWorkNotes3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/PWorkNotes4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
						Budget Ninjas: Expense/Income Recap Details
					</button>
					</h2>
					<div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>October 2019 - October 2019</p>
						<p>Technologies Used: C#, SQL, ASP.NET, HTML</p>
						<p>There are two versions of the Budget Ninjas website: The newer mobile friendly version and the older classic design. While the newer design is mobile friendly it is missing some of the features from the classic page. One such feature was the ability to check the more specific details of expenses and incomes and to even possibly change them or undo said changes. Tools used were Visual Studio 2019 using Telerik controls on classic ASPX pages with C# code behind.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/BudgetP1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/BudgetP2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/BudgetP3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/BudgetP4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
						Budget Ninjas: Upcoming Renewals Report
					</button>
					</h2>
					<div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>September 2019 - September 2019</p>
						<p>Technologies Used: SQL, SSRS</p>
						<p>This report is designed to take a start date and end date and grab a specific set of columns. Note that the Account ID column has been censored as well to protect possible credentials. This project was completed with both SQL Report Services and Report Builder.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Report1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Report2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Report3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Report4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
						Budget Ninjas: Rent Me News Story
					</button>
					</h2>
					<div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>September 2019 - September 2019</p>
						<p>Technologies Used: C#, ASP.NET, HTML, CSS</p>
						<p>This project was rather straight forward. I was given a word document that contained the text of a news story and I was asked to create a new page for it. I was also tasked with creating an entirely new type of page for the mobile site, which would act as a template for further news stories. Tools used were Visual Studio 2019 using Telerik controls on classic ASPX pages.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/News1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/News2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/News3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/News4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
						Greenville Tech: Senior Project
					</button>
					</h2>
					<div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>January 2019 - May 2019</p>
						<p>Technologies Used: HTML, CSS, JavaScript, PHP, Bootstrap</p>
						<p>The final group project I had in college. We were tasked with creating an online bookstore where users could order books. Said orders would need to be logged and tracked as well. This project was done in PHP with a website design done with the help of bootstrap.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/SeniorP1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/SeniorP2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/SeniorP3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/SeniorP4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>		
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
						Greenville Tech: Java Checkers Project
					</button>
					</h2>
					<div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>January 2019 - May 2019</p>
						<p>Technologies Used: Java</p>
						<p>A group project with the main goal of creating a board game using javaFX. Our group chose checkers due to its simple nature, which would prove helpful considering the other projects that also needed attention to at the time. The core part of the program was formed together from a group members discovery of an already existing javaFX checkers game. This base however, was very incomplete, leaving us to learn to study it, learn how it works, then fix it, and get it working. We used this already existing game as a basis for our own, expanding upon it and adding needed features that were not already present. The end result of this project was a rather plain looking but functional game of checkers. The tool used for this project was jGRASP.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Checkers1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Checkers2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Checkers3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/Checkers4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>	
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
						Greenville Tech: Systems And Procedures Project
					</button>
					</h2>
					<div id="collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>August 2018 - December 2018</p>
						<p>Technologies Used: Gamemaker Studio</p>
						<p>A group project with the main goal of creating an educational game with questions based on the textbook used for systems and procedures. This project was created using Game Maker Studio and the language it includes: GML.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/SysProject1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/SysProject2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/SysProject3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/SysProject4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>							
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
						Bonds Career Center: Skills USA Pin Contest
					</button>
					</h2>
					<div id="collapseSixteen" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>January 2017 - January 2017</p>
						<p>Technologies Used: Photoshop</p>
						<p>Students at Bonds Career Center are required to enroll into a program known as SkillsUSA. During one of the classes of my animation and photo editing class, we were tasked with coming up with a pin design to submit into the skillsUSA pin design contest. The pin design was to be created in Photoshop. The image shown below depicts my entry into the contest and as it turns out, this entry won the state prize for the pin design.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/skillPin1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/skillPin2.png" alt="Second slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
						Bonds Career Center: Zombie Game 5012
					</button>
					</h2>
					<div id="collapseSeventeen" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>March 2016 - April 2016</p>
						<p>Technologies Used: Gamemaker Studio</p>
						<p>A project I decided to work on in high-school purely out of boredom one day. The idea was to replicate the style of game found in the zombies mode of Call Of Duty, but put it in a top down perspective (ignoring the fact that Call Of Duty has actually done this...sorta).</p>
						<p>A main goal was to create a system that would both slowly increase the amount of zombies that spawn, while also making them more durable as the waves increases.</p>
						<p>A major challenge I had to overcome was figuring out how to allow zombies to spawn in areas that the player just unlocked, and while the solution was not elegant, it works.</p>
						<p>The game was made in GameMaker Studio, and while I never did get around to properly finishing it, I am still proud of the progress made on it.</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ZG1.png" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ZG2.png" alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ZG3.png" alt="Third slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/ZG4.png" alt="Fourth slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div>

				{/* <div className="accordion-item">
					<h2 className="accordion-header">
					<button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
						Accordion Item
					</button>
					</h2>
					<div id="collapseEighteen" className="accordion-collapse collapse" data-bs-parent="#accordionProjects">
					<div className="accordion-body">
						<p>StartTime - EndTime</p>
						<p>Technologies Used: ???</p>
						<p>Sample Text</p>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src="./public/images/projects/TrenchMap1.png" alt="First slide" />
							</Carousel.Item>
						</Carousel>								
					</div>
					</div>
				</div> */}

			</div>
			<br/>
			<div className="container bg-dark fs-4">
				<p>These are mainly the notable projects I have worked on over the years.  I have spent a lot of time tinkering and testing with several systems, applications, and languages.  The projects listed on this page are only show a handful of the experience I have.</p>
			</div>
			<br/>
		</div>

    </>
  )
}

export default PProjects