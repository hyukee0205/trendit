import Link from 'next/link';


const menu = [
  {
    href: '/news',
    name: 'NEWS'
  },
  {
    href: '/style',
    name: 'STYLE'
  },
  {
    href: '/free',
    name: 'FREE'
  },
]

export default function Navbar() {
  return (
    <div>
      <Link href='/'>
        <h1>Trend it</h1>
      </Link>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

