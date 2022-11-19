export function Screenshot(props) {
    const { url, className } = props;
    return (
        <div className={className}>
            <a href={url} target='_blank'>
                <img src={url} alt="screenshot" />
            </a>
        </div>
    );
}