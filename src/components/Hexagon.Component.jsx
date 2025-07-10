import '../styles/css/Hexagon.css';

const HexagonComponent = () => {
    return (
        <div style={{ position: 'relative', width: '202px', height: '200px', margin: '50px auto' }}>
        <svg
            className="hexagon-one"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            style={{ position: 'absolute', left: 0, top: 0 }}
        >
            <polygon
            points="60,0 140,0 200,60 200,140 140,200 60,200 0,140 0,60"
            stroke="gray"
            strokeWidth="1"
            fill="transparent"
            />
        </svg>

        <svg
            className="hexagon-two"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            style={{ position: 'absolute', left: '0px', top: '20px' }}
        >
            <polygon
            points="60,0 140,0 200,60 200,140 140,200 60,200 0,140 0,60"
            stroke="gray"
            strokeWidth="1"
            fill="transparent"
            />
        </svg>
        </div>
    );
};

export default HexagonComponent;
