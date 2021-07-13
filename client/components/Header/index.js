import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { HeaderStyles, Wrapper, LeftHead, RightHead, UnOrderList, CartButton } from "./HeaderStyles";

export default function Header({count}) {

  return (
    <HeaderStyles>
      <Wrapper>
        <LeftHead>
        <Link href="/">
            <img src="/logo.png" alt="logo" />
          </Link>
          <nav>
            <UnOrderList>
              <li>
                <Link href="/#">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
            </UnOrderList>
          </nav>
        </LeftHead>
        <RightHead>
          <nav>
            <UnOrderList>
              <li>
                <Link href="/signIn">Sign In</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </UnOrderList>
          </nav>
          <CartButton>
            <button onClick={()=> ''} type="button">
              <FaShoppingCart color="#c1354d" />
              <span>{count} Items</span>
            </button>
          </CartButton>
        </RightHead>
      </Wrapper>
    </HeaderStyles>
  );
}
