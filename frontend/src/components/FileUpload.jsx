import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [address, setaddress] = useState('');
  const [rname, setrname] = useState('');
  const [rdesc, setrdesc] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    const metadata = JSON.stringify({
      name: rname,
      "keyvalues": {
        "address": address,
        "description": rdesc
      }
    });
    formData.append('pinataMetadata', metadata);

    const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'pinata_api_key': '514ab3322c258f240160',
        'pinata_secret_api_key': 'b556f0686becfbae53d6202597989a3afb7173767eebf8340d33a883054e7d26',
      }
    });

    console.log(response.data);
  };

  return (
    <form onSubmit={handleUpload} className='flex justify-center mt-10'>
      <input type="file" onChange={handleFileChange} />

      <label>
        Patient Address:
        <input type="text" value={address} onChange={(event) => setaddress(event.target.value)} />
      </label>

      <label>
        Report Name:
        <input type="text" value={rname} onChange={(event) => setrname(event.target.value)} />
      </label>

      <label>
        Report Description:
        <input type="text" value={rdesc} onChange={(event) => setrdesc(event.target.value)} />
      </label>

      <button type="submit" className='p-2 font-semibold text-white bg-blue-400 rounded-md'>Upload</button>
    </form>
  );
};

export default FileUpload;
