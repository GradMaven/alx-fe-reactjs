import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';
import UserDetails from './UserDetails';
import ProfilePage from './components/ProfilePage';



function App() {

    const [userData] = useState({
        name: 'Remy',
        age: 27,
        bio: 'Loves biking and movies.',
      });

    return (
        <div>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <Footer />
            <UserProfile />
            <UserContext />
            <UserDetails />
    
            <h1>User Profile Card</h1>
            <UserContext.Provider value={userData}>
                < ProfilePage />
            </UserContext.Provider>
        </div>
    );
}

export default App;
