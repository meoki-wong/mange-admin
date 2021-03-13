
import {Route,BrowserRouter} from 'react-router-dom'
// import Layout from '_antd@4.13.1@antd/lib/layout/layout'


import Layout from '../Layout/Layout.jsx'
import reimbursementApplication from '../component/ReimburseApplication/reimbursementApplication'


const ReactRoute = ()=>{
    return(
        <BrowserRouter>

            <Route path="/home" component={Layout}/>
            <Route path="/reimbursementApplication" component={reimbursementApplication}/>
        </BrowserRouter>
    )
}


export default ReactRoute