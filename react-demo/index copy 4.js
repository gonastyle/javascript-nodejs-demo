import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CmtList from '@/CmtList.jsx';

// import bootcss from 'bootstrap/dist/css/bootstrap.css';
// console.log(bootcss);
//<button className={[bootcss.btn,bootcss['btn-primary']].join(' ')}></button>  

 import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
    <div>

        <CmtList></CmtList>
        <button className="btn btn-primary">bootstrap</button>

    </div>
    , document.getElementById('app'));
