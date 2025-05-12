import { QRCodeCanvas } from 'qrcode.react';

export const PaymentQRCode = () => (
  <div className="text-center mt-8">
    <h2 className="text-xl font-semibold mb-2">Scan to Pay</h2>
    <QRCodeCanvas value="https://buy.stripe.com/test_28ofZwgougFQ8lq288" size={200} />
  </div>
);
