import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';

const QrCodeScanner = ({ onScan }) => {
  const [qrScanResult, setQrScanResult] = useState(null);

  useEffect(() => {
    if (qrScanResult) {
      onScan(qrScanResult);
      setQrScanResult(null);
    }
  }, [qrScanResult, onScan]);

  return (
    <div>
      <QrReader
        delay={300}
        onError={(err) => console.error(err)}
        onScan={(result) => {
          if (result) {
            setQrScanResult(result);
          }
        }}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default QrCodeScanner;