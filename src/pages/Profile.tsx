import Header from '../components/common/Header';
import Login from '../components/UserPage/Login';
import SignUp from '../components/UserPage/SignUp';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import PageWrapper from '../components/wrappers/PageWrapper';
import useAuth from '../hooks/useAuth';

const Profile = () => {
  const { isAuth, email, logout } = useAuth();

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <p>{email}</p>
        <Login />
        <SignUp />
        {isAuth ? <button onClick={() => logout()}>log out</button> : ''}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Profile;
