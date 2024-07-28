import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Ensure this CSS is imported

const ShimmerLoader = () => {
    return (
        <div>
            <div className="header">
                <Skeleton height={40} width={200} />
                <div className="actions">
                    <Skeleton height={40} width={100} />
                    <Skeleton height={40} width={100} style={{ marginLeft: '10px' }} />
                </div>
            </div>
            <div className="image-grid">
                <Skeleton height={400} />
                <Skeleton height={200} />
                <Skeleton height={200} />
                <Skeleton height={200} />
                <Skeleton height={200} />
            </div>
        </div>
    );
};

export default ShimmerLoader;
