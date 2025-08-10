import { useState } from 'react';

interface AuthFormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

const AuthForm = ({ title, handleClick }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        value={email}
        placeholder="Email"
        autoComplete="username"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </form>
  );
};

export default AuthForm;
