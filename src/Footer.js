const Footer = (props) => {
    return (
        <footer>
            <p>
                Made with <b>react</b> at <b>Le reacteur</b> by
                <b>{props.name}</b>
            </p>
        </footer>
    );
};
export default Footer;
