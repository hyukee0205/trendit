type Props = {image?: string | null};

export default function Avatar({image}: Props) {
  return (
    <div className='w-9 h-9 bg-blue-500 rounded-full bg-'>
      <img className='rounded-full p-[0.1rem]' src={image ?? undefined} alt="user profile" referrerPolicy='no-referrer' />
    </div>
  );
}

