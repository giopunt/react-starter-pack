import styled from 'styled-components';

const navigation = [
  { name: 'Shop', href: '#shop' },
  { name: 'Finance', href: '#finance' },
  { name: 'Social', href: '#social' },
]

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  border: 0;
  padding: 0;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
`

const Link = styled.a`
  color: #000;
  text-decoration: none;
  text-align: center;
  padding: 20px;
  display: block;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  font-size: 17px;
  color: #000;

  &:hover {
    border-bottom-color: inherit;
  }
`;

export default function Header() {
  return (
    <List>
      {navigation.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </List>
  )
}
