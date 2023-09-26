import Link from 'next/link';
import PropTypes from "prop-types";

const Logo = ({ image, image2 }) => {
    return (
        <div className="logo">
            <Link href={process.env.NEXT_PUBLIC_URL + "/"}>
                <img className="logo-light" src={image} alt="Corporate Logo" />
                <img className="logo-dark" src={image2} alt="Corporate Logo" />
            </Link>
        </div>
    );
};
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
