import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';



function App() {
    return (
        <div>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <Footer />
    
            <h1>User Profile Card</h1>
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </div>
    );
}

export default App;
