

const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close');

if(navToggle){
   
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    //define an arrow function 
    navClose.addEventListener('click', ()=> 
    {
        navMenu.classList.remove('show-menu')
    })
}


/*Remove Menu*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    //Removing the show-menu class

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

/*Skills*/
const skillsContent=document.getElementsByClassName('skills_content'),
    skillsHeader=document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass=this.parentNode.className

    for(i=0; i<skillsContent.length;i++){
        skillsContent[i].className='skills_content skills_close'
    }
    if(itemClass=='skills_content skills_close'){
        this.parentNode.className='skills_content skills_open'
    }
}

skillsHeader.forEach((eL)=>{
    eL.addEventListener('click', toggleSkills)
})

/*Qual Tabs*/

const tabs=document.querySelectorAll('[data-target]'),
    tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target=document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification_active')
        })

        target.classList.add('qualification_active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification_active')
        })

        tab.classList.add('qualification_active')
    })
})

/*Modal Projects*/
const modalViews=document.querySelectorAll('.projects_modal'),
    modalBtns=document.querySelectorAll('.projects_button'),
    modalCloses= document.querySelectorAll('.projects_modal-close')

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})
 
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*Active links*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*Background header*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*Go up*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*Dark and light them*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Function to set the dark theme as default
const setDarkTheme = () => {
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
  localStorage.setItem('selected-theme', 'dark');
  localStorage.setItem('selected-icon', 'uil-moon');
};

setDarkTheme();

// Check if the user previously selected a theme
if (selectedTheme) {
  // Apply the user-selected theme and icon
  document.body.classList.toggle(darkTheme, selectedTheme === 'dark');
  themeButton.classList.toggle(iconTheme, selectedIcon === 'uil-moon');
} else {
  // Set the dark theme as default
  setDarkTheme();
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


var workExperiences = [
    {
      company: "Mega",
      position: "Intern Java Backend Developer",
      duration: "June 2024 - September 2024",
      description: "I am going to take internship in summer there , i think it would be fun . Wish everyone who is reading it only good things and luck !   \n \n\nImplemented best software practices when designing databases, APIs and web security."
    },
    {
        company: "Lior Dev",
        position: "Intern Java Developer",
        duration: "March 2024 - June 2024",
        description: "• I have finished one project for the people , while i was there i learned a lot of thing "
      },
      
    // Add more work experiences as needed
  ];
  
  function populateWorkExperiences() {
    var experienceList = document.getElementById("experience-list");
    var progressBar = document.getElementById("progress-bar");
  
    workExperiences.forEach(function (experience, index) {
      var li = document.createElement("li");
      li.textContent = experience.company;
  
      li.addEventListener("mouseover", function() {
        this.classList.add("highlight");
      });
  
      li.addEventListener("mouseout", function() {
        this.classList.remove("highlight");
      });
  
      li.addEventListener("click", function() {
        var selectedExperience = document.getElementsByClassName("selected");
        if (selectedExperience.length > 0) {
          selectedExperience[0].classList.remove("selected");
        }
        this.classList.add("selected");
        updateExperienceDescription(experience);
        var itemHeight = li.offsetHeight;
      var position = Array.from(experienceList.children).indexOf(li);
      var progressBarPosition = (position * itemHeight) + "px";
      progressBar.style.top = progressBarPosition;
      });
  
      experienceList.appendChild(li);
    });
  
    // Initially load the first work experience
    if (workExperiences.length > 0) {
      updateExperienceDescription(workExperiences[0]);
    }
  }
  
  
  function updateExperienceDescription(experience) {
    const positionElement = document.getElementById('position');
    const companyElement = document.getElementById('company');
    const durationElement = document.getElementById('duration');
    const descriptionElement = document.getElementById('description');
  
    positionElement.textContent = experience.position;
    companyElement.textContent = experience.company;
    durationElement.textContent = experience.duration;
  
    const descriptionLines = experience.description.split('\n');
    let descriptionHTML = '';
    descriptionLines.forEach((line) => {
      if (line.trim() !== '') {
        descriptionHTML += `<li>${line}</li>`;
      }
    });
    descriptionElement.innerHTML = `<ul>${descriptionHTML}</ul>`;
  
    // Display all fields when a list item is clicked
    durationElement.style.display = 'block';
    descriptionElement.style.display = 'block';
    positionElement.style.display = 'block';
  }
  
  
  window.onload = function () {
    populateWorkExperiences();
  };
  