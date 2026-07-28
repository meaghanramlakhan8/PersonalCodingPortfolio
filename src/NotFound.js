import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';
export default function NotFound(){return <main className="not-found page-shell"><div className="error-code">404</div><p className="eyebrow">EXCEPTION // ROUTE_RESOLUTION_FAILED</p><h1>SEGFAULT:<br/><span>PAGE_NOT_FOUND</span></h1><div className="error-terminal"><p><b>➜</b> GET {window.location.pathname}</p><span>Error: No component is mounted at this address.</span><span>Suggestion: return to a stable branch.</span></div><Link className="button button-primary" to="/">cd ~/home <span>↗</span></Link></main>}
