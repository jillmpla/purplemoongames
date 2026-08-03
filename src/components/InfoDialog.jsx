import { useEffect, useRef } from 'react';
import { Icon } from './Icons';

export default function InfoDialog({ open, onClose, titleId, eyebrow, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  const handleBackdrop = (event) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog ref={dialogRef} className="info-dialog" aria-labelledby={titleId} onClick={handleBackdrop}>
      <div className="dialog-card">
        <button className="dialog-close" type="button" onClick={onClose}>
          <span className="sr-only">Close dialog</span>
          <Icon name="close" size={22} />
        </button>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
        <div className="dialog-prose">{children}</div>
      </div>
    </dialog>
  );
}
