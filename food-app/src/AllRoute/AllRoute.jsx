
import {Route, Routes} from 'react-router-dom'
import { Home } from '../Component/Home'
import { AboutUs } from '../Component/AboutUs'
import { Contact } from '../Component/Contact'
import { Pages } from '../Component/Pages'
import { Restaurants } from '../Component/Restaurants'

export const AllRoute=()=>{

    return <Routes>
     
     <Route path='/' element={<Home/>}/>
     <Route path='/about us' element={<AboutUs/>}/>
     <Route path='/contacts' element={<Contact/>}/>
     <Route path='/pages' element={<Pages/>}/>
     <Route path='/restaurants' element={<Restaurants/>}/>

    </Routes>
}