import React from 'react'

function Topnav() {
  return (
   <>
   <nav className="navbar bg-body-tertiary">
  <div className="container-fluid" id="topnav">
    <a className="navbar-brand" href="#">
      <img src="data:image/webp;base64,UklGRn4DAABXRUJQVlA4THIDAAAveAANECdhkG2kzuRJnuP9YZ7BTNs27pCMP7/trYK2UaDyOAAB+PdIorhtGyfXn5f2vLb/dM4ChwTNXkJFLTEQ+Ajgvx/sLePRVB9NvMqxwBJTMVgwGAzmTEBEBLMs2XbiBno9z3MjQxAYS9r/Jo0RTpH/iP5PgMS2kSRJir0rKKuza+r339nOnteBiP5PAObSIzMz5y3hlYa8qw3qnulFbM0m7tsL2JpNlsfiqNmNlVaW1W6VvK5it/Oqqj1hXVO1p6wrKubVkmPMVTxW1sPm5YAuscfyasicmjCY1KFpMeJJGI4OO9bC5mScN+bthOKwvBISDwEIzcysBgDBo2EhbM4dAKp1CwA0h/FCxMMAyC4DAPboOrJ5M4DHVQSQPRYnpZt///++Zp+S7qmnv58/9r0GE0vBN5u7AIDcoqefHwePLanC/LbNJ6d4i8Xe3/NvB/8R9lkEANr1htxDNxmk39gnSEA3lGl1TAXmbxwTrPYAnXUMfADkr6TmxlFT1N04hvzYl+YZLzuSGdboJrl6A2BB1jMrEx7pchJWaFJy4hHYXKkJANss7f08fwVbT2U4R8twJKmB1TkOoEodytzDP2NmeohNs971Q880KJJUoEmGLUkpBydZT8/SkmOMMeGWn+dvGc5nTtiXBK4FRdcWPGA8pXM4YLT6pIe+Q3/iwBRmXBNaMIMN5LOuG5mhCcNk/sPRoTwBHlk0ghFoF64e7TMShkkmNMcGf+IgBwnOyyOokZRmzTCCMoFx3rjbbGZxVChBk1RgXhpUybAladnd1TiDPIEAhGZ3PsaGQZcG+JYmHFtahm2pg7VZM8GjbUmbG/LtAFDtslWZQL3BIikZkJc64BmoklQJawB4cWAEEBcDILvcgXC4DgD4PZCrrt2AIXUDsKGwu9k5ZjAOrtYVsysDeFxFANmVT/j/t590u3vtkpRmHUsvDhiStGZrU/c0JY2xizrPueu+pAP25eXmKQAgPQGA6ql44gpea81Q9NbokVPsaDqJh55pZWJP70FzWAQA2lV2AoBszornnrW4P4beTR4JGA7ioSf7ODusDoXdnIzFNoc1uqLDnA2rJXGY1nTaWM0ptBwkdZiZiqi5hbDgpK6pmrBkkvuEsGiSuxph3XwPY+nU5jXC6mOb0yJeIVXxCCe8zJRLO9RMZS+ZsGw=" alt="Logo" width="200" height="64" className="d-inline-block align-text-top"/>
   
    </a>
 

    <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link " aria-current="page" href="#">Course</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Live classes</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Practice</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-disabled="true">Resourse</a>
  </li>
</ul>
</div>
</nav>
   </>
  )
}

export default Topnav