import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';



function App() {
    return (
        <div>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <Footer />
            <Counter />
    
            <h1>User Profile Card</h1>
            <UserProfile name="Remy" age="27" bio="Loves biking and movies" />
        </div>
    );
}

export default App;
