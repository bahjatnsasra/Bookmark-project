import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React , {useState , useEffect} from 'react';

import TabsNav from './components/Tab_components/tabs_navbar'
import ServiceNav from './components/Tab_components/service_navbar'
import Tab from './components/Tab_components/Tab'
import Test from './components/Category_components/test'




function App() {
  let [tabsData,setTabsData] = useState([])
  useEffect(() => {
    fetch("/tabs")
    .then(tabs => tabs.json())
    .then(data => {setTabsData(data)})
  },[])

  let [tabName,setTabName] = useState('')
  function updateTabName(tab) {
    let newTabName = tab
    setTabName(newTabName)
  }


  return (
    <Router>
      <TabsNav tabs = {tabsData} updateTabName = {updateTabName}/>
      <ServiceNav/>
      <Routes>
        <Route path={`/${tabName}`} element={<Tab tab = {tabName}/>} />
      </Routes>
    </Router>
  );
}

export default App;
