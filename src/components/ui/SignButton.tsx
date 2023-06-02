type Props = {
  text: string;
  onClick: () => void;
  style?: string;
}


export default function SignButton({text, onClick, style}: Props) {
  return (
    <div className={`${style === 'page' ? 'g-blue-500 bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded' : ''}`}>
      <button
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

