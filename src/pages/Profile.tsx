import Header from '../components/common/Header';
import Login from '../components/UserPage/Login';
import Orders from '../components/UserPage/Orders/Orders';
import SignUp from '../components/UserPage/SignUp';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import PageWrapper from '../components/wrappers/PageWrapper';
import useAuth from '../hooks/useAuth';

const Profile = () => {
  const { email, logout } = useAuth();

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <p>{email}</p>
        <Login />
        <SignUp />
        <button onClick={() => logout()}>log out</button>
        <Orders />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Profile;
