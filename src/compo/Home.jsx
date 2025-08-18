import { useNavigate } from 'react-router';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h2>홈 페이지 MAIN입니다</h2>
            {/* 홈 페이지 내용 추가 */}
            <nav>
                <ul>
                    <li onClick={() => { navigate('/') }}>Home</li>
                    <li onClick={() => { navigate('/login') }}>Login</li>
                    <li onClick={() => { navigate('/work1') }}>Work1</li>
                </ul>
            </nav>
        </>
    );
}
export default Home;