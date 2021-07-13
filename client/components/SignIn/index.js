import { useRouter } from "next/router";
import {Container, PageDetails, AuthForm} from './SignInStyles';

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <Container>
      <PageDetails >
        <h1>Sign Ip</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </PageDetails>
      <AuthForm>
        <form onSubmit={handleSubmit} method="POST" action="/" autoComplete="off">
          <div>
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              name="email"
            />
            <label htmlFor="email">
              Email
            </label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <label htmlFor="password">
              Password
            </label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </AuthForm>
    </Container>
  );
}
