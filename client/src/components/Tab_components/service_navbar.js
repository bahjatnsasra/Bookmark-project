import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Category_components/Modal'
import TabForm from './TabForm';
import CategoryForm from '../Category_components/CategoryForm';
import './service_navbar.css'




function ServiceNav({tabs , updateCategories}) {
    const [categoryModal, setCategoryModal] = useState(false);
    const [tabModal, setTabModal] = useState(false);


    function tabForm() {
        return <TabForm onClose={() => setTabModal(false)} />
    }
    
    function categoryForm() {
        return <CategoryForm tabs = {tabs} onClose={() => setCategoryModal(false)} updateTab = {updateCategories}/>
    }

    
    return (<nav className="navbar">
            <div className="navbar-link">
                <Link onClick={() => setCategoryModal(true)}>Add Category</Link>
                <Modal open={categoryModal} onClose={() => setCategoryModal(false)} form = {categoryForm}/>
            </div>
            <div className="navbar-link">
                <Link onClick={() => setTabModal(true)}>Add Tab</Link>
                <Modal open={tabModal} onClose={() => setTabModal(false)} form = {tabForm} />
            </div>

        </nav>)
}

export default ServiceNav