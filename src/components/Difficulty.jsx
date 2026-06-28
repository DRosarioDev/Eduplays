export default function Difficulty({ value, onChange }) {
  return (
    <div className="timer-section">
      <p>Difficoltà</p>
      <select
        className="diff-select"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value={0}>⭐</option>
        <option value={1}>⭐⭐</option>
        <option value={2}>⭐⭐⭐</option>
        <option value={3}>⭐⭐⭐⭐</option>
        <option value={4}>⭐⭐⭐⭐⭐</option>
      </select>
    </div>
  );
}