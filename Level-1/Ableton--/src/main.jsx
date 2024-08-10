import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'
import Text from './components/Text'
import Video from './components/Video'

const data = {
  'heading1' : ' — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.', 

  'description1': 'Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.',

  'heading2' : "Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.",

  'description2' : "We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.",

  'heading3':"We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.",

  'description3': "Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.",
  
  'heading4':"We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.",

  'description4':"Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.",

  'heading5':"We’re passionate about what we do, but we’re equally passionate about improving who we are.",

  'description5.1':"We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.",

  'description5.2': "Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.",

  'heading6':"We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.",

  'description6':"If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.",

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Card1 />
    <Text heading={data.heading2} description={data.description2}/>
    <Video />
    <Card2 />
    <Text heading={data.heading3} description={data.description3}/>
    <Card3 />
    <Text heading={data.heading4} description={data.description4}/>
    <Card4 />
  </React.StrictMode>,
)
