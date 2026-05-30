import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAccount } from '../store/slices/accountSlice';
import '../styles/AddAccountModal.css';

function AddAccountModal({ onClose }) {
  const dispatch = useDispatch();

  const [label, setLabel] = useState('');
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');
  const [balance, setBalance] = useState('');
  const [color, setColor] = useState('#4f8ef7');

  const handleSubmit = () => {
    if (label === '' || type === '' || number === '' || balance === '') {
      alert('Please fill all fields!');
      return;
    }
    dispatch(addAccount({
      label,
      type,
      number,
      balance: Number(balance),
      color,
    }));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Add New Account</h2>

        <div className="modal-form">
          <label>Account Label</label>
          <input
            type="text"
            placeholder="e.g. Savings Account"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />

          <label>Account Type</label>
          <input
            type="text"
            placeholder="e.g. Primary, Business"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />

          <label>Account Number</label>
          <input
            type="text"
            placeholder="e.g. XXXX XXXX 1234"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <label>Current Balance (₹)</label>
          <input
            type="number"
            placeholder="e.g. 50000"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />

          <label>Card Color</label>
          <div className="color-options">
            {['#4f8ef7', '#22c55e', '#f59e0b', '#ef4444', '#a855f7'].map((c) => (
              <div
                key={c}
                className={`color-circle ${color === c ? 'selected' : ''}`}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="submit-btn" onClick={handleSubmit}>Add Account</button>
        </div>
      </div>
    </div>
  );
}

export default AddAccountModal;