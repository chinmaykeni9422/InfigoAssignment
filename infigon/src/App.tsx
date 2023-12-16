import Card from './components/Card/Card'
import Card2 from './components/Card/Card2'
import NavBar from './components/NavBar/NavBar'
import Show from './components/Show/Show'

function App() {

  const  data = [
    {
      label: '100+',
      title: "School & College partners"
    },
    {
      label: '50,000+',
      title: "Students Mentored"
    },
    {
      label: '80+',
      title: "Industry Expert mentors"
    }
  ]

  const data2 = [
    {
      img: "https://uploads-ssl.webflow.com/63f5ff2d3827b085d542bb85/6419c3bc2822cfca7cb8240b_power.svg",
      description:"With our career evaluation & 1-on-1 mentor ship, we assist students in identifying and pursuing their best-fit career."
    },
    {
      img: "https://uploads-ssl.webflow.com/63f5ff2d3827b085d542bb85/6419c3bb4ccd35fa9602d542_landscape.svg",
      description:"Help schools to establish a career mentoring ecosystem that is in line with the goal of the New Education Policy."
    },
    {
      img: "https://uploads-ssl.webflow.com/63f5ff2d3827b085d542bb85/6419c3bc39934328c210644d_trophy.svg",
      description:"With our career evaluation & 1-on-1 mentor ship, we assist students in identifying and pursuing their best-fit career."
    }
  ]
  

  return (
    <>
      <NavBar/>
      <Show />
      <Card2 myData={data} />
      <Card myData2={data2}/>
    </>
  )
}

export default App
