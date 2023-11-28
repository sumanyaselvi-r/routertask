
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Fsd from './Fsd';
import Ds from './Ds';
import Cyber from './Cyber';
import Career from './Career';
import Nav from './Nav';
import Topnav from './Topnav';
import Head from './Head';

function App() {
  const data = [{
    id: 1,
    title: 'Top 7 Must-Know Machine Learning Tools ',
    description:'There’s no way you’re a techie if you haven’t heard about machine learning yet, I mean it’s everywhere from Data Science to AI, that’s how vital of a role it plays in the future of all technology.',
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Must-Know-Machine-Learning-Tools.webp'
   

  },
  {
    id: 4,
    title: 'High Paying Cloud-Computing Jobs without Coding in 2023',
    description:'Cloud computing has become an integral part of our technological landscape. Its versatility and scalability have driven a surge in cloud adoption, creating a demand for skilled cloud computing engineers.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2RhKwpom5hrOqPn_fwUoLRzacG2BlO2xQg&usqp=CAU',
  },
  {
    id: 3,
    title: 'Data Visualization in Python',
    description:'Data science and analytics are rapidly growing global fields with a strong job outlook. The Bureau of Labor Statistics projects that the employment of data scientists will grow by 36% from 2021 to 2031, much faster than the average growth rate of 5% for all occupations.',
    image:'https://images.shiksha.com/mediadata/images/articles/1700551262php4kNYHl.jpeg'

  }]
  const data1=[
  {
    id: 1,
    title: '7 Best Full-Stack Development Online Courses [2023]',
    description:'Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise.',
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp',
  },
  {
    id: 2,
    title: 'Is CS Degree required for a Full Stack Development Career?',
    description:'With Computer Science and IT job opportunities constantly increasing, not just CS graduates but people from all kinds of educational backgrounds are ramping up for a career in this industry due to its versatility and growth trajectory. ',
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development.webp'
  },
  {
    id: 3,
    title: 'Full Stack Developer ',
    description:'A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software.',
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Featured-Image-Best-Web-Development-Online-Courses.webp'

  }]
  const data2=[
  {
    id: 1,
    title: 'Data Science Webinars and Workshops',
    description:'In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data science. With data being such an integral part of nearly every industry, staying up to date on the latest trends and techniques is crucial. ',
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/career-opportunities-for-data-science.webp'

  },
  {
    id: 2,
    title: 'Best Data Science Books to Learn 2023',
    description:'Today, we’re going to talk about something really cool: data science. It’s all about using data to make smart decisions and create amazing things. You know, like predicting what people want or finding new ways to help people.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZX90K2YnGJTNJteOpfmq-JzDqsOPb4nMhQ&usqp=CAU'

  },
  {
    id: 3,
    title: 'How Data Science Helps Marketing Teams?',
    description:'Which marketing strategies work? What new methods make a crash? How can the creative domain of marketing shape up into a scientific research domain with data science methods like machine learning, clustering, and regression? ',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zcGikl5mwTK32WSw1ap3o0OVDNtI1bwb0Q&usqp=CAU'
  },

  ]
  const data3=[
    {
      id: 1,
      title: 'Hacking',
      description:'The world is becoming increasingly reliant on the latest technologies. This marks the importance of safeguarding and preventing hazardous digital disasters in information technology.',
      image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp'
  
    },
    {
      id: 2,
      title: '8 Different Types of Cybersecurity and Threats Involved',
      description:'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc.',
      image:'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png'
  
    },
    {
      id: 3,
      title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
      description:'There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism. The anecdote of a hacker has cultivated an ethos of individuality, corporate freedom',
      image:'https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-2048x1072.png'
    },
  
    ]
    const data4=[
      {
        id: 1,
        title: 'Top 5 Product-Based Companies That Don’t Require Coding',
        description:'Every one of us wants to work in top product-based companies, Right? But, Not everyone roduct-Based Companies That Don’t Require Coding',
        image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-High-Paying-IT-Jobs-For-Arts-Students.webp'
    
      },
      {
        id: 2,
        title: 'Career Opportunities for DevOps Engineers',
        description:'Have you ever felt confused when you decided to set up your career path for DevOps engineers? This happens to almost every one of them out there because you know what DevOps is, and what its roles and responsibilities ',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgUNHwm6Cyt3sJWdwSI8EFoX1yuqF_lLrRg&usqp=CAU'
      },
      {
        id: 3,
        title: 'Top High-Paying Non-Coding Jobs',
        description:'In the ever-evolving landscape of DevOps, the focus has long been on automation and coding to streamline software development and operations. However, not all DevOps roles require an extensive coding background.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7ak5LC_2gcIANUr73_66_ZAnZtnTwBxU5A&usqp=CAU'
      },
    
      ]
  

  return (

    <>

<Topnav/>
<Head/>

    <Nav></Nav>
  
    <Routes>
      <Route path='/' element={<div className='container'>
        <div className='row'>

          {
            data.map((card, index) => {
              return<Home key={index} card={card} />

            })
          }

        </div>
      </div>}/>
      <Route path='/fsd' element={<div className='container'>
        <div className='row'>

          {
            data1.map((card1, index) => {
              return<Fsd key={index} card1={card1} />

            })
          }

        </div>
      </div>}/>
      <Route path='/ds' element={<div className='container'>
        <div className='row'>

          {
            data2.map((card2, index) => {
              return<Ds key={index} card2={card2} />

            })
          }

        </div>
      </div>}/>
      <Route path='/cyber' element={<div className='container'>
        <div className='row'>

          {
            data3.map((card3, index) => {
              return<Cyber key={index} card3={card3} />

            })
          }

        </div>
      </div>}/>
      <Route path='/career' element={<div className='container'>
        <div className='row'>

          {
            data4.map((card4, index) => {
              return<Career key={index} card4={card4} />

            })
          }

        </div>
      </div>}/>
      
    </Routes>
    
    </>


  );
}

export default App;
