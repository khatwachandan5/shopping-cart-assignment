import { useRouter } from "next/router";
import {Container, PageDetails, AuthForm} from './RegisterStyles';

export default function Register() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/signIn');
  };

  return (
    <Container>
      <PageDetails >
        <h1>Sign Up</h1>
        <p>We do not share your personal details with anyone.</p>
      </PageDetails>
      <AuthForm>
        <form onSubmit={handleSubmit} method="POST" action="/" autoComplete="off">
          <div>
            <input
              type="text"
              placeholder="First Name"
              id="first"
              required
              name="fisrtName"
            />
            <label htmlFor="first">
              Fisrt Name
            </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              id="last"
              required
              name="lastName"
            />
            <label htmlFor="last">
              Last Name
            </label>
          </div>
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
          <div>
            <input
              type="password"
              name="confirmPassword"
              id="confirm"
              placeholder="Confirm Password"
              required
            />
            <label htmlFor="confirm">
              Confirm Password
            </label>
          </div>
          <input type="submit" value="Register" />
        </form>
      </AuthForm>
    </Container>
  );
}
