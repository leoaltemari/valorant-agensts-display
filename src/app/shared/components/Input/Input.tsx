
import './Input.scss';


interface InputProps {
  onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ onChangeEvent }: InputProps) {
  return (
    <div className="search-agent position-relative">
      <input
        type="text"
        className="search-agent p-2 my-5"
        placeholder="Search for agent..."
        onChange={onChangeEvent}
      />

      <img
        className="position-absolute"
        src="/src/assets/images/icons/search.png"
        alt="Search icon"
      ></img>
    </div>
  );
}