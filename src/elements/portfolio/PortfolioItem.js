import Link from 'next/link';

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="rwt-card">
            <div className="inner">
                <div className="thumbnail">
                    <figure className="card-image">
                        <Link href={`/portfolio/${portfolio.id}`}>
                            <img className="img-fluid" src={portfolio.portfolioImage} alt="Portfolio-01" />
                        </Link>
                    </figure>
                    <Link href={`/portfolio/${portfolio.id}`} className="rwt-overlay"></Link>
                </div>
                <div className="content">
                    <h5 className="title mb--10">
                        <Link href={`/portfolio/${portfolio.id}`}>
                            {portfolio.title}
                        </Link>
                    </h5>
                    <span className="subtitle b2 text-capitalize">{portfolio.category}</span>
                </div>
            </div>
        </div>
    );
};
export default PortfolioItem;