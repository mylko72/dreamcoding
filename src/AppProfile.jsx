import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {

  const handleClick = (e) => {
    console.log(e);
  };
  
  return (
    <>      
      <button onClick={handleClick}>클릭</button>
      <Avatar image="https://media.istockphoto.com/id/1476170969/ko/%EC%82%AC%EC%A7%84/%EC%A7%81%EC%97%85-%EC%A4%80%EB%B9%84%EA%B0%80-%EB%90%9C-%EC%B2%AD%EB%85%84%EC%9D%98-%EC%B4%88%EC%83%81%ED%99%94-%EC%82%AC%EC%97%85-%EA%B0%9C%EB%85%90.jpg?s=1024x1024&w=is&k=20&c=F7D9FxoimCwNaczs9MtXhGoNu_LW_o0ORY3vIhVie-U=" isNew="true" />
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