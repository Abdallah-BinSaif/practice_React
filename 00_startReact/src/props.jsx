import Avatar from './components/props/Avatar.jsx'
import getImageUrl from './components/props/Image.jsx';





const  Profile = () => {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Avatar 
            name='Maria Sklodowska-Curie' 
            imageId='szV5sdG'
            proff='physicist and chemist' 
            discover='polonium (chemical element)' 
            nobel={[
                "nobel Prize in Physics",
                "Mobel Prize in Chemistry",
                "Davy Medal",
                "Matteucci Medal"
            ]}
            />
            <Avatar 
            name='Katsuko Saruhashi' 
            imageId='YfeOqp2'
            proff='geochemist' 
            discover='a method for measuring carbon dioxide in seawater' 
            nobel={[
                "Miyake Prize for geochemistry",
                "Tanaka Prize"
            ]}
            />
          
          
        </div>
      );
};

export default Profile;
