import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>      
      <Profile
        isNew="true"
        name="James Kim" 
        title="프론트엔드 개발자" 
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVEJTk0JTg0JUVCJUExJTlDJUVEJTk1JTg0fGVufDB8fDB8fHww" 
      />
      <Profile name="michael jordan" title="백엔드 개발자" image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fCVFRCU5NCU4NCVFQiVBMSU5QyVFRCU5NSU4NHxlbnwwfHwwfHx8MA%3D%3D" />
      <Profile name="Bob You" title="프론트엔드 개발자" image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fCVFRCU5NCU4NCVFQiVBMSU5QyVFRCU5NSU4NHxlbnwwfHwwfHx8MA%3D%3D" />            
    </>
  );
}

export default AppProfile;