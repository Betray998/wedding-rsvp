import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeShare() {
  const url = window.location.origin;

  return (
    <div className="flex flex-col items-center mt-6">
      <p className="text-sm text-gray-500 mb-2">掃描分享婚禮邀請</p>
      <QRCodeCanvas value={url} size={140} />
    </div>
  );
}