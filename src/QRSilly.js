import {useState, useCallback} from 'react';
import QrReader from 'react-qr-scanner';

export default function QRSilly({uploadMatchData}) {
  // const [result, setResult] = useState("Please scan QR code...");

  const handleScan = (r) => {
    if (r != null) {
      
      let json = JSON.parse(r.text);
      // setResult(json);
      uploadMatchData(json);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <>
      <QrReader
        delay={100}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {/* <p>{result.text}</p> */}
    </>
  );
}