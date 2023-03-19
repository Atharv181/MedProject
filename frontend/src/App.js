
import Nav from './components/Nav';
import Doc from './components/Doc';

import Patient from './components/Patient';
import FileUpload from './components/FileUpload';

const arr = ['QmaSue39qG6prZUiGWeaDEMMQ1FepkbTr221Ct7FWzdkkR','QmPaQsFTFSwsBLcdSPxNSSL4SMsQc8NV83kv1TDP9haCwq'];

function App() {
  return (
    < div className = 'flex-col'>

      
      
      <Nav></Nav>

      <Doc></Doc>

      <FileUpload></FileUpload>

      <Patient myArray = {arr}></Patient>

      

      

    </div>
  );
}

export default App;